let currentUser = null, employees = [];
const API_BASE_URL = 'http://localhost:8080';

document.addEventListener('DOMContentLoaded', initApp);

function checkAuth() {
    const user = localStorage.getItem('hrUser');
    return user ? (currentUser = JSON.parse(user), true) : false;
}

async function apiRequest(endpoint, method = 'GET', data = null) {
    try {
        const options = { method, headers: {} };
        if (data) {
            options.headers['Content-Type'] = typeof data === 'string' 
                ? 'application/x-www-form-urlencoded' 
                : 'application/json';
            options.body = typeof data === 'string' ? data : JSON.stringify(data);
        }
        return await fetch(`${API_BASE_URL}${endpoint}`, options);
    } catch (error) {
        console.error('API request error:', error);
    }
}

function showMessage(el, text, type) {
    el.textContent = text;
    el.className = `message ${type}`;
}

function initApp() {
    const isLoggedIn = checkAuth(), path = window.location.pathname;
    if (isLoggedIn && path.includes('login.html')) window.location.href = 'index.html';
    else if (!isLoggedIn && !path.includes('login.html')) window.location.href = 'login.html';
    else path.includes('login.html') ? initLoginPage() : initDashboardPage();
}

function initLoginPage() {
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value,
              password = document.getElementById('loginPassword').value,
              messageEl = document.getElementById('message');

        try {
            const res = await fetch(`${API_BASE_URL}/hr/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, {
                method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
            if (await res.text() === 'Login Successful') {
                localStorage.setItem('hrUser', JSON.stringify({ email, name: email.split('@')[0] }));
                showMessage(messageEl, 'Login successful! Redirecting...', 'success');
                setTimeout(() => window.location.href = 'index.html', 1000);
            } else showMessage(messageEl, 'Invalid email or password', 'error');
        } catch {
            showMessage(messageEl, 'Error connecting to server', 'error');
        }
    });
}

function initDashboardPage() {
    document.getElementById('userName').textContent = `Welcome, ${currentUser.name}`;
    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('hrUser');
        window.location.href = 'login.html';
    });
    setupModalControls();
    fetchEmployees();
}

function setupModalControls() {
    const modal = document.getElementById('employeeModal');
    document.getElementById('addEmployeeBtn').addEventListener('click', () => openEmployeeModal());
    document.querySelector('.close').addEventListener('click', closeModal);
    document.getElementById('cancelBtn').addEventListener('click', closeModal);
    window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.getElementById('employeeForm').addEventListener('submit', handleEmployeeSubmit);
}

function openEmployeeModal(employee = null) {
    document.getElementById('modalTitle').textContent = employee ? 'Edit Employee' : 'Add Employee';
    document.getElementById('employeeId').value = employee?.id || '';
    document.getElementById('employeeName').value = employee?.name || '';
    document.getElementById('employeeDepartment').value = employee?.department || '';
    document.getElementById('employeeEmail').value = employee?.email || '';
    document.getElementById('employeeSalary').value = employee?.salary || '';
    document.getElementById('employeeModal').style.display = 'block';
}

function closeModal() { document.getElementById('employeeModal').style.display = 'none'; }

async function fetchEmployees() {
    try {
        const res = await apiRequest('/employees');
        employees = res.ok ? await res.json() : [];
        renderEmployees();
    } catch (error) {
        console.error('Error fetching employees:', error);
    }
}

function renderEmployees() {
    const tableBody = document.getElementById('employeesTableBody');
    tableBody.innerHTML = employees.length === 0 
        ? '<tr><td colspan="6" style="text-align: center;">No employees found</td></tr>' 
        : employees.map(emp => `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.department}</td>
                <td>${emp.email}</td>
                <td>$${emp.salary.toFixed(2)}</td>
                <td class="action-buttons">
                    <button class="edit-btn" data-id="${emp.id}">Edit</button>
                    <button class="delete-btn" data-id="${emp.id}">Delete</button>
                </td>
            </tr>`).join('');
    attachEmployeeActions();
}

function attachEmployeeActions() {
    document.querySelectorAll('.edit-btn').forEach(btn =>
        btn.addEventListener('click', e => openEmployeeModal(employees.find(emp => emp.id == e.target.dataset.id))));
    document.querySelectorAll('.delete-btn').forEach(btn =>
        btn.addEventListener('click', e => deleteEmployee(e.target.dataset.id)));
}

async function handleEmployeeSubmit(e) {
    e.preventDefault();
    const employee = {
        name: document.getElementById('employeeName').value,
        department: document.getElementById('employeeDepartment').value,
        email: document.getElementById('employeeEmail').value,
        salary: parseFloat(document.getElementById('employeeSalary').value)
    };
    const employeeId = document.getElementById('employeeId').value;
    if (employeeId) Object.assign(employee, { id: employeeId });
    try {
        const res = await apiRequest(`/employees${employeeId ? `/${employeeId}` : ''}`, employeeId ? 'PUT' : 'POST', employee);
        if (res.ok) {
            closeModal();
            fetchEmployees();
        } else alert('Error saving employee data');
    } catch {
        alert('Error connecting to server');
    }
}

async function deleteEmployee(id) {
    if (confirm('Are you sure you want to delete this employee?')) {
        try {
            const res = await apiRequest(`/employees/${id}`, 'DELETE');
            if (res.ok) fetchEmployees();
            else alert('Error deleting employee');
        } catch {
            alert('Error connecting to server');
        }
    }
}
