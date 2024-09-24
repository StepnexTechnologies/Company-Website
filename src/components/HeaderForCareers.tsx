'use client'

import Link from 'next/link'
import {Popover, PopoverBackdrop, PopoverButton, PopoverPanel,} from '@headlessui/react'
import clsx from 'clsx'

import {Container} from '@/components/Container'
import {Logo} from '@/components/Logo'

function MobileNavLink({
                           href,
                           children,
                       }: {
    href: string
    children: React.ReactNode
}) {
    return (
        <PopoverButton as={Link} href={href} className="block w-full p-2">
            {children}
        </PopoverButton>
    )
}

function MobileNavIcon({ open }: { open: boolean }) {
    return (
        <svg
            aria-hidden="true"
            className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
            fill="none"
            strokeWidth={2}
            strokeLinecap="round"
        >
            <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx(
                    'origin-center transition',
                    open && 'scale-90 opacity-0',
                )}
            />
            <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx(
                    'origin-center transition',
                    !open && 'scale-90 opacity-0',
                )}
            />
        </svg>
    )
}

function MobileNavigation() {
    return (
        <Popover>
            <PopoverButton
                className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
                aria-label="Toggle Navigation"
            >
                {({ open }) => <MobileNavIcon open={open} />}
            </PopoverButton>
            <PopoverBackdrop
                transition
                className="fixed inset-0 bg-slate-300/50 duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
            />
            <PopoverPanel
                transition
                className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <MobileNavLink href="#features">Services</MobileNavLink>
                <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
                <MobileNavLink href="#pricing">Careers</MobileNavLink>
                <hr className="m-2 border-slate-300/40" />
                <MobileNavLink href="/login">Client Login</MobileNavLink>
            </PopoverPanel>
        </Popover>
    )
}

export function HeaderForCareers() {
    return (
        <header className="py-10">
            <Container>
                <nav className="relative z-50 flex">
                    <div className="flex items-center w-full">
                        <Link href="/" aria-label="Home" className={'flex flex-row font-bold items-center gap-4 text-xl'}>
                            <Logo className="h-10 w-auto" />
                        </Link>
                        {/*<div className="hidden md:flex md:gap-x-6">*/}
                        {/*    <NavLink href="#features">Services</NavLink>*/}
                        {/*    <NavLink href="#testimonials">Testimonials</NavLink>*/}
                        {/*    <NavLink href="#pricing">Careers</NavLink>*/}
                        {/*</div>*/}
                        <div className={'flex w-full justify-end'}>
                          <Link href={"https://forms.gle/3Lpxp26VP7VPQKVA7"}>
                            <button className={'bg-black px-6 font-normal py-2 rounded-full text-white hover:bg-zinc-800'}>
                              Apply now
                            </button>
                          </Link>
                        </div>

                    </div>
                </nav>
            </Container>
        </header>
    )
}
