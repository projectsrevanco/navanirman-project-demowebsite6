
function DesignSystem() {
  return (
    <div className="min-h-screen py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-24">
        
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-display font-medium">NavaNirman Projects</h1>
          <p className="text-lg text-navanirman-slate max-w-2xl">
            Design System Foundation. Premium, architectural, trustworthy, modern, and transparent.
          </p>
        </header>

        {/* Colors */}
        <section className="space-y-8">
          <div className="border-b border-navanirman-warmgrey pb-4">
            <h2 className="text-2xl md:text-3xl font-display">Color Palette</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="space-y-2">
              <div className="h-24 w-full bg-navanirman-ivory rounded shadow-sm border border-navanirman-warmgrey"></div>
              <p className="font-medium text-sm">Warm Ivory</p>
              <p className="text-xs text-navanirman-slate">Primary Background</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 w-full bg-navanirman-concrete rounded shadow-sm"></div>
              <p className="font-medium text-sm">Soft Concrete</p>
              <p className="text-xs text-navanirman-slate">Secondary Surfaces</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 w-full bg-navanirman-charcoal rounded shadow-sm"></div>
              <p className="font-medium text-sm">Deep Charcoal</p>
              <p className="text-xs text-navanirman-slate">Primary Text</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 w-full bg-navanirman-slate rounded shadow-sm"></div>
              <p className="font-medium text-sm">Muted Slate</p>
              <p className="text-xs text-navanirman-slate">Secondary Text</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 w-full bg-navanirman-terracotta rounded shadow-sm"></div>
              <p className="font-medium text-sm">Terracotta</p>
              <p className="text-xs text-navanirman-slate">Accent</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 w-full bg-navanirman-black rounded shadow-sm"></div>
              <p className="font-medium text-sm">Near Black</p>
              <p className="text-xs text-navanirman-slate">Dark Sections</p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-8">
          <div className="border-b border-navanirman-warmgrey pb-4">
            <h2 className="text-2xl md:text-3xl font-display">Typography</h2>
          </div>
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline">
              <div className="text-navanirman-slate text-sm">Heading 1</div>
              <div className="md:col-span-3">
                <h1 className="text-5xl md:text-7xl">Building the Future</h1>
                <p className="text-sm text-navanirman-slate mt-2">Playfair Display / Regular</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline">
              <div className="text-navanirman-slate text-sm">Heading 2</div>
              <div className="md:col-span-3">
                <h2 className="text-4xl md:text-5xl">Our Projects</h2>
                <p className="text-sm text-navanirman-slate mt-2">Playfair Display / Regular</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline">
              <div className="text-navanirman-slate text-sm">Heading 3</div>
              <div className="md:col-span-3">
                <h3 className="text-2xl md:text-3xl">Architectural Design</h3>
                <p className="text-sm text-navanirman-slate mt-2">Playfair Display / Regular</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline">
              <div className="text-navanirman-slate text-sm">Body Text</div>
              <div className="md:col-span-3">
                <p className="text-base leading-relaxed max-w-2xl">
                  We believe in creating spaces that not only serve a functional purpose but also inspire and elevate the human experience. Our approach marries timeless architectural principles with modern sustainability practices.
                </p>
                <p className="text-sm text-navanirman-slate mt-2">Inter / Regular / 16px</p>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-8">
          <div className="border-b border-navanirman-warmgrey pb-4">
            <h2 className="text-2xl md:text-3xl font-display">Buttons & Controls</h2>
          </div>
          <div className="flex flex-wrap gap-6 items-center">
            <button className="btn btn-primary">Our Services</button>
            <button className="btn btn-secondary">View Portfolio</button>
            <button className="btn btn-outline">Contact Us</button>
            <button className="btn btn-ghost">Read More →</button>
          </div>
        </section>

        {/* Spacing & Layout Preview */}
        <section className="space-y-8">
          <div className="border-b border-navanirman-warmgrey pb-4">
            <h2 className="text-2xl md:text-3xl font-display">Layout Primitives</h2>
          </div>
          
          <div className="space-y-4">
            <div className="bg-navanirman-concrete p-8 rounded flex items-center justify-center h-32">
              <span className="text-navanirman-slate">Container Padding (p-8)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-navanirman-concrete p-8 rounded flex items-center justify-center h-32">
                <span className="text-navanirman-slate">Column 1</span>
              </div>
              <div className="bg-navanirman-concrete p-8 rounded flex items-center justify-center h-32">
                <span className="text-navanirman-slate">Column 2</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default DesignSystem;
