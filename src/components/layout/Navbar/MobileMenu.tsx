
import { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import MenuIcon from '@/assets/svgs/layout/menu.svg';
import Image from 'next/image';
import links from './links';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useRouter } from 'next/navigation';
import { appAxios } from '@/api/axios';
import { signOut } from '@/store/slices/user';
import { sendCatchFeedback } from '@/functions/feedback';

function MobileMenu() {
    const [open, setOpen] = useState(false);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { user } = useAppSelector((state) => state.user);

    const logoutUser = async () => {
        try {
            await appAxios.get('/auth/logout');
            dispatch(signOut());
            router.push('/login');
        } catch (error) {
            dispatch(signOut());
            router.push('/login');
            sendCatchFeedback(error);
        }
    };

    return (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
            <div style={{ position: 'relative' }}>
                <button onClick={() => setOpen(true)} style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                    <Image src={MenuIcon} alt='Menu' />
                </button>
                {open && (
                    <nav
                        style={{
                            position: 'absolute',
                            right: 0,
                            top: '3.5rem',
                            backgroundColor: 'white',
                            width: '10rem',
                            zIndex: 30,
                            borderRadius: '0.25rem',
                            boxShadow: '12px 12px 24px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        <ul style={{ display: 'flex', flexDirection: 'column' }}>
                            {links.map((item) => (
                                <Link href={item.destination} key={item.destination}>
                                    <li style={{ padding: '0.75rem 1.25rem', fontSize: '0.875rem', color: 'black' }}>
                                        {item.title}
                                    </li>
                                </Link>
                            ))}

                            {user && (
                                <li
                                    style={{ padding: '0.75rem 1.25rem', fontSize: '0.875rem', color: 'red', cursor: 'pointer' }}
                                    onClick={logoutUser}
                                >
                                    Logout
                                </li>
                            )}
                        </ul>
                    </nav>
                )}
            </div>
        </ClickAwayListener>
    );
}

export default MobileMenu;
