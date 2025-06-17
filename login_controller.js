document.addEventListener('DOMContentLoaded', function() {
    const memberForm = document.getElementById('member-log-in-form');
    if (memberForm) {
        memberForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const memberId = document.getElementById('member-id').value;
            const memberPassword = document.getElementById('member-password').value;
            const member = library.findUser(memberId);
            // 这里写你的验证逻辑
            if (member && member.userId == memberId && member.password == memberPassword &&member instanceof Member) {
                localStorage.setItem('currentMemberName', member.name);
                localStorage.setItem('currentMemberId', memberId);
                window.location.href = "view_memberGUI.html";
            } else {
                alert('Please enter the correct ID and password!');
            }
        });
    }

    const librarianForm = document.getElementById('librarian-member-log-in-form');
    if (librarianForm) {
        librarianForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const librarianId = document.getElementById('librarian-id').value;
            const librarianPassword = document.getElementById('librarian-password').value;
            // 这里写你的验证逻辑
            const librarian = library.findUser(librarianId);
            if (librarian && librarian.userId == librarianId && librarian.password == librarianPassword && librarian instanceof Librarian) {
                localStorage.setItem('currentLibrarianId', librarianId);
                localStorage.setItem('currentLibrarianName', librarian.name);
                window.location.href = "view_librarianGUI.html";
            } else {
                alert('Please enter the correct ID and password!');
            }
        });
    }
});