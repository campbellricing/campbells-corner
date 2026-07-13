// types
import { Bio, Contact } from '@/libs/definitions';

export const TITLE = 'Homepage';
export const NAME = 'Tran "Campbell" Bao Lam';
export const MESSAGE = 'Hi, welcome to my space on the internet!';
export const ABOUT_ME =
    'I am a Software Engineer who loves making computers feel like home. When I am not writing code, you will probably find me deep in a Hyprland ricing session on Arch Linux, tweaking config files, refining keybindings, and chasing that pixel-perfect desktop setup. That same obsession with customization and polish carries over into my work: with over two years of front-end experience building React applications, I care deeply about the small details that make an interface feel intuitive, responsive, and genuinely enjoyable to use.';
export const BIO: Array<Bio> = [
    {
        time: '2002',
        info: 'Born in Dalat City, Vietnam'
    },
    {
        time: '2022 ~ 2024',
        info: 'Worked as a Freelance Front-end Web Developer'
    },
    {
        time: '2024',
        info: "Completed the Engineer's Program in Software Engineering at Dalat University"
    },
    {
        time: '2024 ~ 2026',
        info: 'Worked as a Front-end Engineer at DLS - VN'
    },
    {
        time: '2026 ~ Present',
        info: 'Working as a Front-end Engineer at Finepro Automation'
    }
];
export const CONTACT: Array<Contact> = [
    {
        icon: '/icons/github.svg',
        text: '@campbellricing',
        link: 'https://github.com/campbellricing'
    },
    {
        icon: '/icons/linkedin.svg',
        text: '@tranbaolam26902',
        link: 'https://linkedin.com/in/tranbaolam26902'
    },
    {
        icon: '/icons/envelop.svg',
        text: 'tranbaolam26902@gmail.com'
    }
];
