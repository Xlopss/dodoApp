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
        title: 'Samedi parce qu\'on mange des crêpes et c\'est chouette',
        date: '2024-10-19',
        dodoleft: (Math.floor((new Date().getTime() - new Date('2024-10-19').getTime()) / (1000 * 60 * 60 * 24)))*-1
    },
    {
        title: 'Fin de stage',
        date: '2024-10-25',
        dodoleft: (Math.floor((new Date().getTime() - new Date('2024-10-25').getTime()) / (1000 * 60 * 60 * 24)))*-1
    },
    {
        title: 'Envoi rapport de stage',
        date: '2024-11-11',
        dodoleft: (Math.floor((new Date().getTime() - new Date('2024-11-11').getTime()) / (1000 * 60 * 60 * 24)))*-1
    }
];