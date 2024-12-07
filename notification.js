class Notification {
    constructor() {
        this.container = this.createNotificationContainer();
    }

    createNotificationContainer() {
        const container = document.createElement('div');
        container.className = 'notification-container';
        document.body.appendChild(container);
        return container;
    }

    show(message, duration = 3000) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerText = message;
        this.container.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                this.container.removeChild(notification);
            }, 500);
        }, duration);
    }
}

const notification = new Notification();
