import { useState } from 'react'

const DashboardBar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen)
      }
    const handleRefresh = () => {
        window.location.reload();
      };
      const renderContent = () => {
        switch (activeSection) {
          case 'CSPM':
            return (<div className="space-y-4 ml-2">
            <div className="flex items-center">
                <input id="widget1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                <label htmlFor="widget1" className="ml-2 text-sm font-medium text-gray-900">Cloud Accounts</label>
            </div>
            <div className="flex items-center">
                <input id="widget2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                <label htmlFor="widget2" className="ml-2 text-sm font-medium text-gray-900">Cloud Account Risk Assessment</label>
            </div>
        </div>);
          case 'CWPP':
            return (<div className="space-y-4 ml-2">
            <div className="flex items-center">
                <input id="widget1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                <label htmlFor="widget1" className="ml-2 text-sm font-medium text-gray-900">Top 5 Namespace Specific Alerts</label>
            </div>
            <div className="flex items-center">
                <input id="widget2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                <label htmlFor="widget2" className="ml-2 text-sm font-medium text-gray-900">Workload Alerts</label>
            </div>
        </div>);
          case 'Image':
            return <div>Image</div>;
          case 'Ticket':
            return <div>Ticket</div>;
          default:
            return null;
        }
      };
    return(
    <div className="flex justify-between px-10 py-1 h-12">
        <div className="font-bold text-lg">
            CNAPP Dashboard
        </div>
        <div className="flex justify-between px-10 py-1 h-12 gap-x-2">
            <button onClick={toggleDrawer} className="flex items-center space-x-1 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
                <span>Add Widget +</span>
            </button>
            <button onClick={handleRefresh} className="p-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"/>
                </svg>
            </button>
            <button className="p-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="3" d="M12 6h.01M12 12h.01M12 18h.01"/>
            </svg>

            </button>
            <button className="flex items-center px-4 py-2 bg-white border border-blue-900 rounded shadow-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 gap-x-1">
                <svg className="w-6 h-6 text-blue-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd"/>
                </svg>
                <svg className="h-full w-px text-blue-900" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 24">
                    <rect width="1" height="24" fill="currentColor"></rect>
                </svg>
                <span className="text-blue-900 font-bold"> Last 2 days</span>
                <svg className="ml-2 w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
        </div>
         
      {isDrawerOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 w-1/2 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
            <div className="flex text-center text-sm text-white bg-blue-900 h-12"><p className="p-2">Add Widget</p></div>
            <p className="mt-4 ml-2">Personalise your dashboard by adding the following widget</p>
            <div className="border-b border-gray-200 mb-4">
                <div className="flex -mb-px text-sm font-medium text-center">
                    <div className="mr-2">
                        <button onClick={() => setActiveSection('CSPM')} style={{ color: activeSection === 'CSPM' ? 'blue' : 'black' }} className="inline-block p-4 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-300">CSPM</button>
                    </div>
                    <div className="mr-2">
                        <button onClick={() => setActiveSection('CWPP')} style={{ color: activeSection === 'CWPP' ? 'blue' : 'black' }} className="inline-block p-4 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-300">CWPP</button>
                    </div>
                    <div className="mr-2">
                        <button onClick={() => setActiveSection('Image')} style={{ color: activeSection === 'Image' ? 'blue' : 'black' }} className="inline-block p-4 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-300">Image</button>
                    </div>
                    <div className="mr-2">
                        <button onClick={() => setActiveSection('Ticket')} style={{ color: activeSection === 'Ticket' ? 'blue' : 'black' }} className="inline-block p-4 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-300">Ticket</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="content">
                    {renderContent()}
                </div>
            </div> 
            <div className="relative h-96">
            <div className="absolute bottom-0 right-0 mb-4 mr-4 px-4 py-2 text-white rounded">
                <button onClick={toggleDrawer} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50">
                Cancel
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
                Confirm
                </button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}    
  
export default DashboardBar;
