import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile () {
    const { level } = useContext(ChallengeContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/63361459?s=460&u=33e80a9511b33e04d6b9da609fe0f3314f47c1c9&v=4" alt="Davi Freitas"/>
            <div>
                <strong>Davi Freitas</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>

        </div>
    );
}