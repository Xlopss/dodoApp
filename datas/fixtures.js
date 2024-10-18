export const events = [
    {
        title: 'Nouvel An',
        date: '2025-01-01',
        dodoleft: (Math.floor((new Date().getTime() - new Date('2025-01-01').getTime()) / (1000 * 60 * 60 * 24)))*-1
    },
    {
        title: 'Anniversaire Noé',
        date: '2025-01-29',
        dodoleft: (Math.floor((new Date().getTime() - new Date('2025-01-29').getTime()) / (1000 * 60 * 60 * 24)))*-1
    },
    {
        title: 'Anniversaire Estelle',
        date: '2025-04-22',
        dodoleft: (Math.floor((new Date().getTime() - new Date('2025-04-22').getTime()) / (1000 * 60 * 60 * 24)))*-1
    },
    {
        title: 'Demaing',
        date: '2024-10-19',
        dodoleft: (Math.floor((new Date().getTime() - new Date('2024-10-19').getTime()) / (1000 * 60 * 60 * 24)))*-1
    },
    {
        title: 'Aujourd\'hui',
        date: '2024-10-18',
        dodoleft: (Math.floor((new Date().getTime() - new Date('2024-10-18').getTime()) / (1000 * 60 * 60 * 24)))*-1
    },
    {
        title: 'Hier',
        date: '2024-10-17',
        dodoleft: (Math.floor((new Date().getTime() - new Date('2024-10-17').getTime()) / (1000 * 60 * 60 * 24)))*-1
    }
];