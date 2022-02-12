import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'ki7i5z88',
    dataset: 'production',
    apiVersion: '2021-03-05',
    token: 'skbaHcyx71jn0fbWlSjsMFiaRlIBPjdXrQw9SW3vmDPbUqYmmecSap2oaVUthnZi3zMgDCmbqNcfsHhSeFS3tKTwWqJcgMlK2jH0ludkscFvMtKpyMDFuHG77MGIPx14dsgWKh2Qak5IdEWo2vvLB04OUQgKMUcRk4X3wXCDklU62kD8gTmU',
    useCdn: false,
})