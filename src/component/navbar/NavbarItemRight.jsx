const NavbarItemRight = () => {
    const navbarItem = [
        {
            link: '/',
            text: 'Archive',
        },
        {
            link: '/',
            text: 'Pro Version',
        },
        {
            text: 'Download',
        },
    ];
    return (
        <>
            <nav className="flex gap-6">
                {navbarItem.map((item, index) => (
                    <a
                        key={index}
                        href={item.link ? item.link : '#'}
                        className="text-sm font-medium text-gray-600 hover:text-blue-500"
                    >
                        {item.text}
                    </a>
                ))}
            </nav>
        </>
    );
};

export default NavbarItemRight;
