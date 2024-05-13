import React from 'react';

export default function About() {
    return (
        <div className="row-about">
            <div className="abt-columnB col-lg-12">
                <h2>About ASET</h2>
                <p>A Beacon of Community Service</p>


                <div class="center-justified">For over 13 years, ASET Mosque has been a beacon of community service, enriching the lives of both young and old. Now, as our community flourishes, our humble facilities are bursting at the seams. That's why we're thrilled to unveil our bold new project: a modern, four-floor landmark mosque. Blending timeless Islamic architecture with contemporary flair, our vision is to create a vibrant center of learning and spirituality. Join us in shaping a brighter future for generations to come.</div>

            </div>

            <div className="columnA">
                <iframe src="https://www.youtube.com/embed/G0cLjNrjzCc?si=VCzPabvjUcy2yYBq" div className="abt-video" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    );
}
