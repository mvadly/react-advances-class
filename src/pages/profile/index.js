import React from 'react';
import "./profile.scss"

const Profile = () => {
    return (
        <div class="profile-section">
            <section class="card">
                <figure class="panel meta">
                    <picture style={{ marginBottom:"15px" }}>
                        <img class="avatar" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/67516/Screen_Shot_2015-11-18_at_11.47.23_AM.png" alt="profile" width="128" height="128" />
                        <img class="company-logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/67516/b-01.png" alt="BigglesCodes" width="40" height="40" />
                    </picture>
                    <figcaption>
                        <h1 class="name">Muhammad Fadly</h1>
                        <h3 class="title">Application Developer</h3>
                    </figcaption>
                </figure>

                <div class="panel info">
                    <dl class="skillz">
                        <dt>CSS</dt>
                        <dd style={{ width:"95%" }}>98</dd>
                        <dt>Javascript</dt>
                        <dd style={{ width:"86%" }}>86</dd>
                        <dt>PHP</dt>
                        <dd style={{ width:"90%" }}>90</dd>
                        <dt>Go</dt>
                        <dd style={{ width:"80%" }}>80</dd>
                    </dl>
                </div>

            </section>


        </div>
    );
};

export default Profile;