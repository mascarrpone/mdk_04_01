import React from 'react';

const Header = () => {
    return (
        <div className="flex justify-between bg-blue-500 px-8 py-3 ">

            <div className="flex items-center gap-4"><img src="/logo.webp" alt="logo" className="w-10"/>
                <div><h2 className="text-xl font-bold uppercase">НАТК имени Б.С.Галущака</h2></div>
            </div>

        </div>
    );
};

export default Header;