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

export const topDealUsers = [
    {
        id: 1,
        img: 'https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        username: 'Elva McDonald',
        email: 'elva@gmail.com',
        amount: '3.668',
    },
    {
        id: 2,
        img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600',
        username: 'Linnie Nelson',
        email: 'linnie@gmail.com',
        amount: '3.256',
    },
    {
        id: 3,
        img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600',
        username: 'Brent Reeves',
        email: 'brent@gmail.com',
        amount: '2.998',
    },
    {
        id: 4,
        img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600',
        username: 'Adeline Watson',
        email: 'adeline@gmail.com',
        amount: '2.512',
    },
    {
        id: 5,
        img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600',
        username: 'Juan Harrington',
        email: 'juan@gmail.com',
        amount: '2.134',
    },
    {
        id: 6,
        img: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600',
        username: 'Augusta McGee',
        email: 'augusta@gmail.com',
        amount: '1.932',
    },
    {
        id: 7,
        img: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600',
        username: 'Angel Thomas',
        email: 'angel@gmail.com',
        amount: '1.560',
    },
];
