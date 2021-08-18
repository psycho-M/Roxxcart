import React from 'react'

export function Link({link}) {
    return (
            <a rel='noreferrer' target='_blank' href={link.url}>{link.name}</a>
    );
}

function SocialMediaLinks({link}) {
    return(
        <section className='social-media-link'>
            <Link link={link} />
        </section>
    );
}

function LeftSide() {
    return (
        <section className='left-side'>
            <section className='logo'>
                <img 
                    style={{
                        display: 'inline-block',
                        padding: '2px',
                        margin: '3px'}} 
                        src='' 
                        alt='logo' />
                <h2 style={{
                        display: 'inline-block',
                        padding: '2px',
                        margin: '3px'}
                    }>RoxxCart</h2>
            </section>
            <section className="description">
                "RoxxCart designs clothing for the young, old & everyone in between - but most importantly, for the fashionable"
            </section>
            <section className="social-media-links">
                <SocialMediaLinks 
                    link={{
                        url: 'https://www.facebook.com/',
                        name: 'facebook'
                    }} 
                />
                <SocialMediaLinks 
                    link={{
                        url: 'https://www.instagram.com',
                        name: 'instagram'
                    }} 
                />
                <SocialMediaLinks 
                    link={{
                        url: 'https://www.pinterest.com',
                        name: 'pinterest'
                    }} 
                />
                <SocialMediaLinks 
                    link={{
                        url: 'https://www.youtube.com/',
                        name: 'youtube'
                    }} 
                />
                <SocialMediaLinks 
                    link={{
                        url: 'https://www.twitter.com/',
                        name: 'twitter'
                    }} 
                />
            </section>
        </section>
    )
}

export default LeftSide;
