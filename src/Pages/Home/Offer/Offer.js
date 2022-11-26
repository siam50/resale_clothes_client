import React from 'react';

const Offer = () => {
    return (
        <div className="p-6 py-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 my-5">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <h2 className="text-center text-4xl tracking-tighter font-bold">Transaction with Nagad and get
                        <br className="sm:hidden" /> 10% Cash Back
                    </h2>
                    <div className="space-x-2 text-center py-2 lg:py-0">
                        <span>Plus free key ring! Use code:</span>
                        <span className="font-bold text-lg">Nagad</span>
                    </div>
                    <a href="/" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Hurry</a>
                </div>
            </div>
        </div>
    );
};

export default Offer;