import React from 'react'
import Link from 'next/link'
import Repo from '@/app/components/Repo'
import BackButton from '@/app/components/BackButton'

const RepoPage = ( {params: {name}} ) => {
  return (
    <div>
        <Link href="/Code/Repos">
        <BackButton/>
        </Link>
       <Repo name={name}/>
    </div>
  )
}

export default RepoPage