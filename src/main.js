// Shared Component Injector for MPA
import './style.css'

const NAVIGATION = [
    { name: 'Home', href: '/openneural/', id: 'nav-home' },
    { name: 'Programs', href: '/openneural/programs.html', id: 'nav-programs' },
    { name: 'Research', href: '/openneural/research.html', id: 'nav-research' },
    { name: 'Leadership', href: '/openneural/leadership.html', id: 'nav-leadership' },
];

function renderHeader() {
    const currentPath = window.location.pathname;
    const navLinks = NAVIGATION.map(link => {
        // Match active link but handle potential trailing slash or index.html
        const isActive = link.href === currentPath || (link.href === '/openneural/' && (currentPath === '/openneural/index.html' || currentPath === '/openneural'));
        return `<a href="${link.href}" class="nav-link ${isActive ? 'active' : ''}">${link.name}</a>`;
    }).join('');

    return `
    <header class="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm transition-all duration-300">
        <div class="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="text-accent">
                    <span class="material-symbols-outlined text-3xl">neurology</span>
                </div>
                <div class="flex flex-col">
                    <span class="text-xl font-serif font-bold text-primary leading-none tracking-tight">OpenNeural</span>
                    <span class="text-[0.65rem] uppercase tracking-widest text-slate-500 font-medium pt-1">Foundation</span>
                </div>
            </div>
            
            <nav class="hidden md:flex items-center gap-8 lg:gap-12">
                ${navLinks}
            </nav>

            <div class="flex items-center gap-4">
                <a href="#" class="btn-primary text-xs uppercase tracking-wide px-5 py-2.5 rounded-sm">Get Involved</a>
            </div>
        </div>
    </header>
    <div class="h-20"></div> <!-- Spacer for fixed header -->
    `;
}

function renderFooter() {
    return `
    <footer class="bg-slate-50 border-t border-slate-200 mt-24 pt-16 pb-8">
        <div class="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            <!-- Brand Column -->
            <div class="col-span-1 md:col-span-5 space-y-6">
                <div class="flex items-center gap-2 mb-2">
                    <span class="material-symbols-outlined text-slate-400">neurology</span>
                    <span class="font-serif font-bold text-slate-700 text-lg">OpenNeural</span>
                </div>
                <p class="text-slate-500 text-sm leading-relaxed max-w-sm">
                    A 501(c)(3) non-profit organization dedicated to democratizing neuro-immunology research through open-source computational modeling and decentralized education.
                </p>
                <div class="pt-2 flex gap-4">
                    <a href="#" class="text-slate-400 hover:text-accent transition-colors"><i class="material-symbols-outlined text-xl">public</i></a>
                    <a href="#" class="text-slate-400 hover:text-accent transition-colors"><i class="material-symbols-outlined text-xl">mail</i></a>
                </div>
            </div>
            
            <!-- Links Column 1 -->
            <div class="col-span-1 md:col-span-2 md:col-start-7">
                <h4 class="font-bold text-primary text-sm uppercase tracking-widest mb-6">Organization</h4>
                <ul class="space-y-3 text-sm text-slate-600">
                    <li><a href="/openneural/leadership.html" class="hover:text-accent transition-colors">Board of Directors</a></li>
                    <li><a href="/openneural/programs.html" class="hover:text-accent transition-colors">Our Mission</a></li>
                    <li><a href="/openneural/research.html" class="hover:text-accent transition-colors">Research Index</a></li>
                    <li><a href="#" class="hover:text-accent transition-colors">Annual Reports</a></li>
                </ul>
            </div>

            <!-- Links Column 2 -->
            <div class="col-span-1 md:col-span-2">
                <h4 class="font-bold text-primary text-sm uppercase tracking-widest mb-6">Resources</h4>
                <ul class="space-y-3 text-sm text-slate-600">
                    <li><a href="#" class="hover:text-accent transition-colors">Access Data</a></li>
                    <li><a href="#" class="hover:text-accent transition-colors">Submit a Paper</a></li>
                    <li><a href="#" class="hover:text-accent transition-colors">Partner Portal</a></li>
                </ul>
            </div>

            <!-- Links Column 3 -->
            <div class="col-span-1 md:col-span-2">
                <h4 class="font-bold text-primary text-sm uppercase tracking-widest mb-6">Legal</h4>
                <ul class="space-y-3 text-sm text-slate-600">
                    <li><a href="#" class="hover:text-accent transition-colors">Privacy Policy</a></li>
                    <li><a href="#" class="hover:text-accent transition-colors">Terms of Service</a></li>
                    <li><a href="#" class="hover:text-accent transition-colors">Cookie Settings</a></li>
                </ul>
            </div>
        </div>

        <div class="max-w-[1280px] mx-auto px-6 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
            <span>© 2026 OpenNeural Foundation. All Rights Reserved.</span>
            <span>Based in Virginia, USA.</span>
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
