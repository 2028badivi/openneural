// Shared Component Injector for MPA
import './style.css'

const NAVIGATION = [
    { name: 'Command Center', href: '/openneural/', id: 'nav-home' },
    { name: 'Research Nodes', href: '/openneural/research.html', id: 'nav-research' },
    { name: 'Infrastructure', href: '/openneural/infrastructure.html', id: 'nav-infra' },
    { name: 'Initiatives', href: '/openneural/initiatives.html', id: 'nav-initiatives' },
    { name: 'Corporation', href: '/openneural/corporation.html', id: 'nav-corp' },
];

function renderHeader() {
    const currentPath = window.location.pathname;
    const navLinks = NAVIGATION.map(link => {
        // Simple active check: strictly matches href OR is root (for home)
        const isActive = link.href === currentPath || (link.href === '/openneural/' && (currentPath === '/openneural/index.html' || currentPath === '/openneural'));
        return `<a href="${link.href}" class="nav-link ${isActive ? 'text-primary border-b border-primary' : ''}">${link.name}</a>`;
    }).join('');

    return `
    <header class="fixed top-0 w-full z-50 border-b border-white/10 bg-background-dark/95 backdrop-blur-xl">
        <div class="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
            <div class="flex items-center gap-4">
                <div class="size-8 bg-primary/20 flex items-center justify-center rounded-sm border border-primary/50">
                    <span class="material-symbols-outlined text-primary text-xl">neurology</span>
                </div>
                <div class="flex flex-col">
                    <span class="text-sm font-bold tracking-wider text-white">OPENNEURAL</span>
                    <span class="text-[0.6rem] font-mono text-primary uppercase tracking-widest">Foundation Node</span>
                </div>
            </div>
            <nav class="hidden md:flex items-center gap-8">
                ${navLinks}
            </nav>
            <div class="flex items-center gap-4">
                <div class="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                    <div class="size-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    <span class="text-[0.6rem] font-mono text-green-400 uppercase">System Nominal</span>
                </div>
            </div>
        </div>
    </header>
    <div class="h-16"></div> <!-- Spacer -->
    `;
}

function renderFooter() {
    return `
    <footer class="border-t border-white/10 bg-surface mt-24 py-16">
        <div class="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
            <div class="col-span-1 space-y-4">
                <div class="flex items-center gap-2">
                    <span class="material-symbols-outlined text-zinc-500">neurology</span>
                    <span class="font-bold text-zinc-500 tracking-wider">OPENNEURAL</span>
                </div>
                <p class="text-zinc-600 text-xs leading-relaxed">
                    Decentralized infrastructure for high-fidelity neuro-immunology simulation and analysis. 
                    Governed by the OpenNeural Foundation.
                </p>
                <div class="text-xs font-mono text-zinc-700">
                    ID: ON-2026-X88
                </div>
            </div>
            
            <div>
                <h4 class="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6">Governance</h4>
                <ul class="space-y-3 text-zinc-400">
                    <li><a href="/openneural/corporation.html" class="hover:text-primary">Executive Board</a></li>
                    <li><a href="#" class="hover:text-primary">Transparency Reports</a></li>
                    <li><a href="#" class="hover:text-primary">Global Partners</a></li>
                </ul>
            </div>

            <div>
                <h4 class="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6">Technical</h4>
                <ul class="space-y-3 text-zinc-400">
                    <li><a href="/openneural/infrastructure.html" class="hover:text-primary">Node Status</a></li>
                    <li><a href="#" class="hover:text-primary">API Documentation</a></li>
                    <li><a href="/openneural/research.html" class="hover:text-primary">Data Explorer</a></li>
                </ul>
            </div>

            <div>
                <h4 class="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6">Legal</h4>
                <ul class="space-y-3 text-zinc-400">
                    <li><a href="#" class="hover:text-primary">Privacy Policy</a></li>
                    <li><a href="#" class="hover:text-primary">Terms of Service</a></li>
                    <li><a href="#" class="hover:text-primary">GDPR Compliance</a></li>
                    <li><a href="#" class="hover:text-primary">ISO 27001</a></li>
                </ul>
            </div>
        </div>
        <div class="max-w-[1400px] mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-zinc-700 font-mono">
            <span>© 2026 OPENNEURAL FOUNDATION. ALL RIGHTS RESERVED.</span>
            <span>SECURE.DECENTRALIZED.OPEN.</span>
        </div>
    </footer>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('afterbegin', renderHeader());
    document.body.insertAdjacentHTML('beforeend', renderFooter());
});
