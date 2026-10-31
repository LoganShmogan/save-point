# Security Policy

The Save Point website is maintained by **Save Point Limited**.

## Reporting a problem

If you find a security issue with savepoint.co.nz or this repository, please email **[support@savepoint.co.nz](mailto:support@savepoint.co.nz)** with the subject line "Security: Website". **Do not** open a public GitHub issue for it.

Please include:

- what you found and how to reproduce it
- what an attacker could do with it
- your contact details, if you'd like us to follow up

We will acknowledge your report within 2 working days and keep you updated until it is fixed. Please give us a reasonable time to fix the issue before sharing it publicly.

## Secrets

The site has no backend, database or server-side secrets. The only configuration is the EmailJS settings for the contact form, which live in `.env.local` locally and in the Vercel project for production. They are never committed: `.gitignore` excludes every `.env*` file except `.env.example`.

## If a key leaks

| Secret | What to do |
|---|---|
| EmailJS public key or IDs | Regenerate the key in the EmailJS dashboard, update `.env.local` and the Vercel environment variables, then redeploy |
| Vercel or GitHub access | Revoke the token at vercel.com/account/tokens or github.com/settings/tokens and create a new one |
