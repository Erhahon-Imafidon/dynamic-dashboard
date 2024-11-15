import {
    Home,
    Products,
    Profile,
    Users,
    Orders,
    Posts,
    Element,
    Note,
    Forms,
    Calendar,
    Backups,
    Charts,
    Logs,
    Settings,
} from './assets/icons/index.tsx';

export const menu = [
    {
        id: 1,
        title: 'main',
        listItems: [
            {
                id: 1,
                title: 'Home',
                url: '/',
                icon: Home,
            },
            {
                id: 2,
                title: 'Profile',
                url: '/users/1',
                icon: Profile,
            },
        ],
    },

    {
        id: 2,
        title: 'lists',
        listItems: [
            {
                id: 1,
                title: 'Users',
                url: '/users',
                icon: Users,
            },
            {
                id: 2,
                title: 'Products',
                url: '/products',
                icon: Products,
            },
            {
                id: 3,
                title: 'Orders',
                url: '/orders',
                icon: Orders,
            },
            {
                id: 4,
                title: 'Posts',
                url: '/posts',
                icon: Posts,
            },
        ],
    },

    {
        id: 3,
        title: 'general',
        listItems: [
            {
                id: 1,
                title: 'Elements',
                url: '/',
                icon: Element,
            },
            {
                id: 2,
                title: 'Notes',
                url: '/',
                icon: Note,
            },
            {
                id: 3,
                title: 'Forms',
                url: '/',
                icon: Forms,
            },
            {
                id: 4,
                title: 'Calendar',
                url: '/',
                icon: Calendar,
            },
        ],
    },

    {
        id: 4,
        title: 'Maintenance',
        listItems: [
            {
                id: 1,
                title: 'Settings',
                url: '/',
                icon: Settings,
            },
            {
                id: 2,
                title: 'Backups',
                url: '/',
                icon: Backups,
            },
        ],
    },

    {
        id: 5,
        title: 'analytics',
        listItems: [
            {
                id: 1,
                title: 'Charts',
                url: '/',
                icon: Charts,
            },
            {
                id: 2,
                title: 'Logs',
                url: '/',
                icon: Logs,
            },
        ],
    },
];
