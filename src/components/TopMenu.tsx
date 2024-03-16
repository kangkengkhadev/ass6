import Image from 'next/image'
import TopMenuItem from './TopMenuItem';

export default function TopMenu() {
    return (
        <div className='h-14 bg-white fixed top-0 left-0 right-0 z-30 
        flex flex-row-reverse border-t-2 border-t-grey-400 border-t-solid border-b-2 border-b-grey-400 border-b-solid'>
            <Image src={'/img/vaccine.png'} className='h-full w-auto' 
            alt='logo' width={0} height={0} sizes='100vh' />
            <TopMenuItem title='Menu Item Booking' pageRef='/booking'/>
        </div>
    );
}