import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

import React from 'react'

function Header() {
  return (
    <div className='fixed top-0'>
      <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
          <UserButton />
          </SignedIn>
    </div>
  )
}

export default Header