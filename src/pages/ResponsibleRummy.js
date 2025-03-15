import React, { useEffect } from "react";

const ResponsibleRummy = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when component mounts
    }, []);

    return (
        <div className="responsible-container">
            <h1 className="headings">Responsible Rummy at BGM Game</h1>
            <p>
                At Ecofare Gaming, we believe it is our duty to support responsible gaming, and we do so by providing a safe and responsible gaming environment in compliance with the gaming industry’s best practices. Ecofare Gaming commits itself to integrity, trustability, and fair play and we proactively reach out to solve any gaming related problems. We have strived a lot to come up with measures that ensure a responsible, safe and secure gaming environment for playing Rummy.
            </p>
            <h2>Security Measures taken at Ecofare Gaming for Responsible Gaming</h2>
            <h3>Under 18 years</h3>
            <p>According to Supreme Court, the legal age for playing rummy card games in India is 18 years and above. Ecofare Gaming does not allow anyone below 18 to register and play on our website. If we find that you are underage, your account will be banned instantly.</p>
            
            <h3>Restricted Locations</h3>
            <p>At Ecofare Gaming we do not allow players from Assam, Odisha, Andhra Pradesh, Tamil Nadu and Telangana to play rummy games for cash in our site.</p>
            
            <h3>Anti Fraud/Collusion Protection Policy</h3>
            <ul>
                <li>Ecofare Gaming has integrated a state-of-the-art surveillance mechanism to spot any malpractice in the game.</li>
                <li>Our Anti-fraud algorithms monitor the gaming sessions to ensure no fraud takes place.</li>
                <li>Colluding with other players is also considered as a form of fraud. We ban players indulging in collusion.</li>
            </ul>
            
            <h3>Multiple Accounts prohibited</h3>
            <p>According to our site’s policy, a user is allowed to have only one account at Ecofare Gaming. If it is found that a player is holding more than one account, then we instantly terminate the account of that player.</p>
            
            <h3>Following are some of the best practices to help you play responsibly</h3>
            <ul>
                <li>Play Rummy in moderation and for entertainment.</li>
                <li>Set aside an entertainment budget to play Rummy.</li>
                <li>While playing Rummy, do not try to recover losses.</li>
                <li>Rummy should not be played to escape problems or to make money.</li>
                <li>Keep track of time and monitor the amount of money you spend while playing Rummy.</li>
                <li>Balance the time you spend on playing Rummy online with other leisure activities.</li>
            </ul>
            
            <h3>Get Help from Game Prudence</h3>
            <p>If you suspect that you are facing any of the issues mentioned above and as a result have not been playing Rummy responsibly, or if you know someone who is facing similar issues, kindly seek help immediately. You can get help by registering your request at Game Prudence.</p>
        </div>
    );
};

export default ResponsibleRummy;
