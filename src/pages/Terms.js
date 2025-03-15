import React, { useEffect } from "react";

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when component mounts
    }, []);

    return (
        <div className="terms-container">
            <h1 className="headings">Terms & Condition</h1>
            <p>
                At BGM Game, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, share, and safeguard your data when you use our platform, including our skill-based gaming services. Your use of the platform, including playing games, adding funds, withdrawing amounts, and engaging in any other activities, is entirely at your own discretion and responsibility. BGM Game shall not be held liable for any misuse of your account, unauthorized transactions, or any other issues arising from your failure to adhere to the guidelines and responsibilities set forth herein. By using BGM Game, you agree to the terms outlined in this policy.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
                We collect the following types of information to provide and improve our services:
            </p>

            <h3>1.1 Personal Information</h3>
            <p>
                Registration Details: Name, email address, phone number, date of birth, and gender.
                KYC Details: PAN card, Aadhar card, and bank account details for verification purposes.
                Location Data: If you choose to grant location access, we may collect your geographical data to enhance your experience.
            </p>

            <h3>1.2 Usage and Technical Information</h3>
            <p>
                Device information (e.g., IP address, browser type, operating system).<br />
                Gameplay data, including bets placed, points earned, and play history.<br />
                Cookies and similar technologies to track user activity and preferences.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
                We use your information for the following purposes:
            </p>
            <ul>
                <li>To verify your identity and ensure compliance with legal and regulatory requirements.</li>
                <li>To process transactions, including deposits and withdrawals.</li>
                <li>To provide personalized gaming experiences and improve our services.</li>
                <li>To send notifications, updates, and promotional offers (with your consent).</li>
                <li>To detect and prevent fraudulent or suspicious activities.</li>
            </ul>

            <h2>3. Data Sharing and Disclosure</h2>
            <p>We do not share your personal information with third parties except in the following circumstances:</p>
            <ul>
                <li><b>Service Providers:</b> We may share data with trusted third-party service providers for payment processing, analytics, and fraud prevention.</li>
                <li><b>Legal Obligations:</b> We may disclose information if required by law or to protect the rights, property, or safety of BGM Game, its users, or others.</li>
                <li><b>Business Transfers:</b> In the event of a merger, acquisition, or sale of assets, user data may be transferred as part of the transaction.</li>
            </ul>

            <h2>4. Security Measures</h2>
            <p>
                We implement industry-standard security measures to protect your data, including encryption, secure servers, and regular audits. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>5. User Rights and Choices</h2>
            <h3>5.1 Access and Correction</h3>
            <p>
                You can access and update your bank account details during the withdrawal process, subject to admin approval. For other profile details, contact our support team for assistance.
            </p>

            <h3>5.2 Data Deletion</h3>
            <p>
                You may request the deletion of your account and associated data by contacting our support team. Note that some data may be retained for legal or regulatory purposes.
            </p>

            <h3>5.3 Opt-Out Options</h3>
            <p>
                You can opt out of receiving promotional notifications at any time by adjusting your settings in the app.
            </p>

            <h2>6. KYC and Age Verification</h2>
            <p>
                All users must complete the KYC process to access our services. Age verification is mandatory, and individuals under 18 years of age are strictly prohibited from using BGM Game.
            </p>

            <h2>7. User Accountability and Responsibility</h2>
            <p>
                You are solely responsible for maintaining the security of your account, including safeguarding your login credentials, MPIN, OTP, and any other sensitive information.
            </p>

            <h2>8. Suspicious Activity and Account Termination</h2>
            <p>
                If suspicious activity is detected, BGM Game reserves the right to suspend or delete your account without prior notice.
            </p>

            <h2>9. Withdrawal and Refund Policy</h2>
            <p>
                Withdrawals are only permitted for win points, and bank account details must match the user’s PAN card.
            </p>

            <h2>10. Updates to the Privacy Policy</h2>
            <p>
                We may update this Privacy Policy periodically to reflect changes in our practices, technologies, or legal requirements. Significant changes will be communicated to users through the app or email.
            </p>

            <h2>11. Contact Us</h2>
            <p>
                For any questions, concerns, or requests regarding this Privacy Policy, please contact our support team through the help section of the app.
            </p>

            <h2>12. Market Access Restrictions</h2>
            <p>
                The market section will be inaccessible if the user has been blocked by the admin, has not completed their KYC process, or the admin has blocked the user’s KYC.
            </p>

            <h2>13. Spin and Win</h2>
            <p>
                Users can earn spin chances by referring new users to the platform. Spin opportunities allow users to win extra points, enhancing their gaming experience.
            </p>

            <h2>14. Bet Placing Policy</h2>
            <p>
                The minimum and maximum points for placing bets are subject to changes set by the admin. Points are credited immediately after the results are updated in the application.
            </p>

            <h2>15. Play History</h2>
            <p>
                Users can view their past bets in the “My Play History” section. Bets can be deleted within 5 minutes of placement, provided the market result has not been declared.
            </p>

            <h2>16. Notification Policy</h2>
            <p>
                Notifications are accessible through the bell icon in the app. Users are advised to check notifications regularly for updates and critical information.
            </p>

            <h2>17. Add Points Policy</h2>
            <p>
                Points can only be added via our official website. Payments from unauthorized sources are not accepted, and we are not responsible for such cases.
            </p>

            <h2>18. Location Permission</h2>
            <p>
                Providing location access is optional. Periodic notifications will encourage users to grant location access for enhanced experience and regional trend tracking.
            </p>

            <h2>19. Children’s Privacy</h2>
            <p>
                Our services are not intended for individuals under 18 years of age. Age verification is enforced during the KYC process.
            </p>

            <h2>20. Data Sharing Policy</h2>
            <p>
                We do not share personal information with third parties except for service providers, legal obligations, or business transfers.
            </p>

            <h2>21. Cancellation and Refund Policy</h2>
            <p>
                For details on cancellation and refund procedures, please refer to our Cancellation and Refund Policy.
            </p>

            <p>2023 © BGM Game All rights reserved.</p>
        </div>
    );
};

export default Terms;
