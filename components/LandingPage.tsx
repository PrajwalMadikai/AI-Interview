import Header from "./Header";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="mx-auto max-w-7xl px-8 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Ace Your Next Interview with AI
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Our AI-powered interview platform helps you practice, improve, and gain confidence 
              with realistic mock interviews tailored to your dream job.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="rounded-md bg-blue-600 px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Get Started for Free
              </button>
              <button className="rounded-md border border-gray-300 px-6 py-3 text-lg font-medium text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                How It Works
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-xl bg-gray-200 p-8 shadow-lg">
              <div className="h-64 w-full animate-pulse rounded-lg bg-gray-300 md:h-80"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">Why Choose AI Interview?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Our platform offers the most realistic interview experience with advanced AI technology.
          </p>
          
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
                title: "Personalized Questions",
                description: "Get questions tailored to your specific industry, role, and experience level."
              },
              {
                icon: (
                  <svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Real-time Feedback",
                description: "Receive instant analysis on your answers, tone, and body language."
              },
              {
                icon: (
                  <svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Progress Tracking",
                description: "Monitor your improvement over time with detailed analytics."
              }
            ].map((feature, index) => (
              <div key={index} className="rounded-lg bg-gray-50 p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Transform Your Interview Skills?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Join thousands of professionals who have improved their interview performance with our AI platform.
          </p>
          <button className="mt-8 rounded-md bg-white px-8 py-3 text-lg font-medium text-blue-600 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
            Start Your Free Trial
          </button>
        </div>
      </section>

      <footer className="bg-gray-800 py-12 text-white">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path 
                      d="M9 15L12 9L15 15" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                    />
                    <path 
                      d="M9 18H15" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="text-xl font-semibold">AI Interview</span>
              </div>
              <p className="mt-4 text-gray-400">
                Helping you land your dream job through AI-powered interview practice.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Product</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Examples</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Interview Tips</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} AI Interview. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;