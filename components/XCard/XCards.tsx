import clsx from 'clsx';

export const XCards = ({ children }) => {
    return <div className="grid gap-x-4 sm:grid-cols-2">
        {children}
    </div>
}


export const XCard = ({ href, newtab,fill, iconClass, Icon, title, desc }) => {
    return <a href={href} target={newtab ? '_blank' : ''} className="my-2 rounded-xl border-gray-100 border hover:border-black dark:border-gray-800 dark:hover:border-white">
        <div className="py-5 px-6">
            <div className="w-[30px] h-[30px]">
                <Icon className={clsx('w-full h-full', iconClass)} fill={fill} />
            </div>
            <h4 className="font-semibold text-base text-gray-800 dark:text-white mt-4">{title}</h4>
            <p className="mt-1 text-gray-400 dark:text-gray-400">{desc}</p>
        </div>
    </a>
}