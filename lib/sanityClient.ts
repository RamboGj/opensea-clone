import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'o4iydhq5',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: false,
    token: "sk8dRwTneFEsxovteqod7vCHRrswcXBTxEffZmOHxtSYMOofHSxLT3pNKGaGyoWVNRR3IKOZWVPPJlX1AoON5L6aBhJTsMh9iA3TyZJMCrgumkr9MO6xFkfuduWDaKwNAEiWxpLeUxlLLVxyfKcqHuasvH92phVveZcYFyo9QQfLJSu9USCW"
})