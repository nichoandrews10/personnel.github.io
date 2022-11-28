// Fill Orders in Dashboard Table
ActivitiesDashboard.forEach(activity => {
    const tr = document.createElement('tr');
    const trContent = 
        `
            <td>${activity.employeeName}</td>
            <td>${activity.activityDescription}</td>
            <td class="${activity.jobStatus === 'Declined' ? 'danger' : activity.jobStatus === 'Applying' ? 'warning' : 'success'}">${activity.jobStatus}</td>
        `
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})