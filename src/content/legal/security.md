**Version 1.0 · Last updated 1 November 2026**

The Ledgeraa Service holds users' tax identifiers, financial records and a connection to their HMRC accounts. Ledgeraa LTD (**"Ledgeraa"**, **"we"**, **"us"** or **"our"**) therefore treats security as fundamental to the Service. This page describes the measures we take to protect data, explains how you can protect your Account, and sets out how to report a security vulnerability.

## 1. Status of this page

1.1 This page is provided for information only. It describes, in general terms, the technical and organisational measures that Ledgeraa has in place at the date shown above.

1.2 This page does not form part of our Terms of Service (the **"Terms"**) or our Data Processing Agreement (the **"DPA"**), and does not create any obligation, warranty or representation in addition to them. Ledgeraa's contractual commitments on security are set out in the Terms and in Annex 2 to the DPA.

1.3 No method of transmitting or storing data is completely secure. Ledgeraa cannot guarantee that data will never be subject to unauthorised access, loss or disclosure. Nothing in this clause limits any liability that cannot be limited or excluded by law, or affects your statutory rights.

1.4 Ledgeraa may change the measures described on this page from time to time, provided that the overall level of protection is not materially reduced.

1.5 Capitalised terms used on this page and not defined in it have the meanings given in the Terms.

## 2. How we protect data

2.1 **Encryption.**

(a) All data is encrypted in transit between your browser and our servers using TLS.

(b) All data is encrypted at rest by our hosting providers.

(c) HMRC access tokens and refresh tokens are additionally encrypted by the Service before they are stored. They are stored and used only on our servers and are never sent to your browser.

2.2 **HMRC credentials.** You authorise the Service on HMRC's own sign-in page. We never see or store your HMRC sign-in credentials.

2.3 **Account sessions and passwords.**

(a) You are signed out of the Service automatically after 10 minutes of inactivity. An on-screen warning is displayed 60 seconds beforehand, with a "Keep me signed in" button. Your session tokens are deleted from your browser when you sign out.

(b) Passwords are stored by our authentication provider only in hashed form, and cannot be read by Ledgeraa.

(c) Your password is never stored in your browser, including while you complete registration.

2.4 **Segregation.** Database access controls ensure that each user can access only their own records. Receipt images are held in private storage locations for each user, and are made available only through links that expire after one hour.

2.5 **Hosting and location.**

(a) The database, file storage and backups are hosted in Ireland on Amazon Web Services infrastructure, through Supabase.

(b) The application and the website are hosted by DigitalOcean in London.

(c) Receipt images are read by Microsoft Azure AI Document Intelligence in its UK South (London) region. The Service deletes the extracted information from Azure as soon as it has read it, and Microsoft deletes the images within 24 hours.

(d) The full list of our providers is published at ledgeraa.com/subprocessors.

2.6 **Backups and deletion.**

(a) Automated daily backups are encrypted and retained for 7 days, after which they are overwritten.

(b) The restoration of backups is tested [every six months].

(c) When an Account is closed, its data is deleted in accordance with clause 6.5 of the Terms. Copies held in backups are deleted when those backups expire.

2.7 **Payments.** Card details are transmitted directly to Stripe, which is certified as a PCI DSS Level 1 service provider. Card details are never transmitted to or stored on our servers.

2.8 **Access control.**

(a) Access to production systems is restricted to those of Ledgeraa's directors who require it to operate and support the Service.

(b) Multi-factor authentication is required on the accounts used to administer our hosting, database, payment, email and source code systems.

(c) Access rights are reviewed every six months and removed when they are no longer required.

(d) Every person with access to production systems is bound by a duty of confidentiality.

2.9 **Logging and monitoring.** Access to production systems is logged, and logs are monitored for unusual activity. Logs, including records of requests made to HMRC, are retained for 7 days.

2.10 **Software maintenance.**

(a) Security updates to the third-party software on which the Service relies are applied promptly, and updates that fix critical vulnerabilities are applied within 14 days of release. Automated scanning checks that software for known vulnerabilities.

(b) Changes to the Service are tested in a separate development environment before release, and production data is not used in that environment.

2.11 **HMRC fraud prevention.** The Service sends HMRC the fraud-prevention information that HMRC requires with each Making Tax Digital request, as described in clause 3.2 of our Privacy Policy.

2.12 **Incident response.** We maintain a documented incident-response procedure. If a personal data breach occurs, we shall:

(a) take prompt steps to contain it and to assess its effect;

(b) notify the Information Commission (the **"ICO"**) within 72 hours of becoming aware of it, where the law requires;

(c) notify affected users without undue delay where the breach is likely to result in a high risk to them, or where the law otherwise requires;

(d) notify users in respect of Customer Personal Data in accordance with clause 3.6 of the DPA; and

(e) notify HMRC where HMRC's terms of use require.

## 3. Protecting your Account

3.1 You are responsible for keeping your Account credentials secure, in accordance with clause 4.3 of the Terms. We recommend that you:

(a) use a strong password that you do not use for any other service;

(b) never share the codes or links that we send you. Ledgeraa will never ask for your password or your HMRC sign-in credentials;

(c) sign out of the Service when using a shared device, and keep your browser and operating system up to date; and

(d) if you notice any unusual activity, change your password, disconnect HMRC in Settings and notify privacy@ledgeraa.com immediately. You may also revoke the Service's access through your HMRC online account.

## 4. Reporting a vulnerability

4.1 If you believe you have identified a security vulnerability in the Service, please report it to **privacy@ledgeraa.com** with "Security" in the subject line. Your report should include a description of the vulnerability, the steps needed to reproduce it, the parts of the Service affected and its likely impact. Please do not include any other person's personal data beyond what is strictly necessary to describe the issue.

4.2 **Conditions.** In carrying out any security research on the Service, you agree:

(a) to test only against an Account that you own;

(b) not to access, modify, delete, copy or retain the data of any other person. If you encounter such data, you shall stop testing, notify us immediately and delete any copy you hold;

(c) not to test HMRC's systems, or the systems or infrastructure of Supabase, Stripe, DigitalOcean, Microsoft, Google or any other third party, since Ledgeraa cannot authorise testing of them;

(d) not to carry out denial-of-service attacks, spam, social engineering or physical attacks against Ledgeraa, its users or its providers;

(e) not to use automated scanning tools in a way that generates a significant volume of requests or degrades the Service;

(f) not to exploit a vulnerability beyond the extent necessary to demonstrate it;

(g) to keep the vulnerability confidential until we have remedied it, or until 90 days after your report, whichever is earlier, unless we agree otherwise in writing; and

(h) to comply with all applicable laws.

4.3 **Our commitments.** In return, we shall:

(a) acknowledge your report within 3 business days, and keep you informed of our progress; and

(b) with your permission, credit you publicly once the issue has been resolved.

4.4 **Safe harbour.** Where you carry out security research in accordance with clause 4.2:

(a) Ledgeraa considers that research to be authorised by Ledgeraa for the purposes of the Computer Misuse Act 1990;

(b) Ledgeraa shall not bring legal proceedings against you, or report you to any law enforcement agency, in respect of that research; and

(c) if a third party brings proceedings against you in respect of that research, Ledgeraa shall, on request, confirm that the research was authorised by Ledgeraa.

4.5 Clause 4.4 does not apply to any activity that does not comply with clause 4.2, and does not bind any third party.

4.6 We do not currently operate a paid bug bounty programme, and no report entitles you to any payment.

## 5. Contact

5.1 Questions about this page may be sent to privacy@ledgeraa.com.

## security.txt

*Publication note: publish the following file at* `https://www.ledgeraa.com/.well-known/security.txt`*. Renew the Expires date before it passes.*

```
Contact: mailto:privacy@ledgeraa.com
Expires: 2027-10-01T23:59:59Z
Preferred-Languages: en
Canonical: https://www.ledgeraa.com/.well-known/security.txt
Policy: https://www.ledgeraa.com/security
```
