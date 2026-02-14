// Shared Component Injector for MPA
import './style.css'
import logoUrl from './assets/logo.jpg'

const NAVIGATION = [
    { name: 'Home', href: '/openneural/', id: 'nav-home' },
    { name: 'Olympiad', href: '/openneural/olympiad.html', id: 'nav-olympiad' },
    { name: 'Programs', href: '/openneural/programs.html', id: 'nav-programs' },
    { name: 'Research', href: '/openneural/research.html', id: 'nav-research' },
    { name: 'Leadership', href: '/openneural/leadership.html', id: 'nav-leadership' },
];

function renderHeader() {
    const currentPath = window.location.pathname;
    const navLinks = NAVIGATION.map(link => {
        const isActive = link.href === currentPath || (link.href === '/openneural/' && (currentPath === '/openneural/index.html' || currentPath === '/openneural'));
        return `<a href="${link.href}" class="nav-link ${isActive ? 'active' : ''}">${link.name}</a>`;
    }).join('');

    return `
    <header class="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm transition-all duration-300">
        <div class="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <a href="/openneural/" class="flex items-center gap-3">
                    <img src="${logoUrl}" alt="OpenNeural Logo" class="h-10 w-10 object-contain rounded-full shadow-sm">
                    <div class="flex flex-col">
                        <span class="text-xl font-serif font-bold text-primary leading-none tracking-tight">OpenNeural</span>
                        <span class="text-[0.6rem] uppercase tracking-widest text-slate-400 font-bold pt-1">Decentralized Intelligence</span>
                    </div>
                </a>
            </div>
            
            <nav class="hidden md:flex items-center gap-8 lg:gap-10">
                ${navLinks}
            </nav>

            <div class="flex items-center gap-4">
                <a href="/openneural/leadership.html#apply" class="btn-primary text-xs uppercase tracking-wide px-5 py-2.5 rounded-sm">Join the Team</a>
            </div>
        </div>
    </header>
    <div class="h-20"></div>
    `;
}

function renderFooter() {
    return `
    <footer class="bg-slate-50 border-t border-slate-200 mt-24 pt-16 pb-8">
        <div class="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            <!-- Brand Column -->
            <div class="col-span-1 md:col-span-5 space-y-6">
                <div class="flex items-center gap-3 mb-2">
                    <img src="${logoUrl}" alt="OpenNeural Logo" class="h-8 w-8 object-contain rounded-full opacity-80">
                    <span class="font-serif font-bold text-slate-700 text-lg">OpenNeural</span>
                </div>
                <p class="text-slate-500 text-sm leading-relaxed max-w-sm">
                    A pioneer in neuro-immunology research, democratizing access through open-source computational modeling and decentralized education protocols.
                </p>
                <div class="pt-2 flex gap-4">
                    <a href="https://github.com/openneural-dev" class="text-slate-400 hover:text-accent transition-colors" target="_blank">
                        <!-- Simple GitHub Icon Placeholder -->
                        <span class="text-xs font-mono uppercase font-bold tracking-tighter border border-slate-300 px-1 rounded">GitHub</span>
                    </a>
                </div>
            </div>
            
            <!-- Links Column 1 -->
            <div class="col-span-1 md:col-span-2 md:col-start-7">
                <h4 class="font-bold text-primary text-sm uppercase tracking-widest mb-6">Organization</h4>
                <ul class="space-y-3 text-sm text-slate-600 font-medium">
                    <li><a href="/openneural/leadership.html" class="hover:text-accent transition-colors">Leadership</a></li>
                    <li><a href="/openneural/programs.html" class="hover:text-accent transition-colors">Programs</a></li>
                    <li><a href="/openneural/research.html" class="hover:text-accent transition-colors">Research Repository</a></li>
                    <li><a href="/openneural/olympiad.html" class="hover:text-accent transition-colors">Neurovation Olympiad</a></li>
                </ul>
            </div>

            <!-- Links Column 2 -->
            <div class="col-span-1 md:col-span-2">
                <h4 class="font-bold text-primary text-sm uppercase tracking-widest mb-6">Resources</h4>
                <ul class="space-y-3 text-sm text-slate-600 font-medium">
                    <li><a href="https://gfnno.oneapp.dev/" class="hover:text-accent transition-colors" target="_blank">GFNNO Prep App</a></li>
                    <li><a href="https://gfnno-trainer.oneapp.dev/" class="hover:text-accent transition-colors" target="_blank">Olympiad Trainer</a></li>
                    <li><a href="https://form.jotform.com/260346989614065" class="hover:text-accent transition-colors" target="_blank">Apply to Lead</a></li>
                </ul>
            </div>

            <!-- Links Column 3 -->
            <div class="col-span-1 md:col-span-2">
                <h4 class="font-bold text-primary text-sm uppercase tracking-widest mb-6">Support</h4>
                <ul class="space-y-3 text-sm text-slate-600 font-medium">
                    <li><a href="mailto:info@openneural.org" class="hover:text-accent transition-colors">Contact Us</a></li>
                    <li><a href="#" class="hover:text-accent transition-colors">Privacy Policy</a></li>
                    <li><a href="#" class="hover:text-accent transition-colors">Terms of Service</a></li>
                </ul>
            </div>
        </div>

        <div class="max-w-[1280px] mx-auto px-6 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
            <span>© 2026 OpenNeural. All Rights Reserved.</span>
            <span>Innovating at the Frontier of Neuroimmunology.</span>
        </div>
    </footer>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    // Inject components
    const body = document.body;
    body.insertAdjacentHTML('afterbegin', renderHeader());
    body.insertAdjacentHTML('beforeend', renderFooter());
});
