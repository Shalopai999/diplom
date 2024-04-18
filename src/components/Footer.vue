<template>
    <div class="footer">
        <div class="container">
            <div class="box__content">
                <div class="box__content__left">
                    <div class="box__content__left__logo">
                        <Logo />
                    </div>
                    <div class="box__content__left__info">
                        <!-- <p class="box__content__info__title">Информация</p> -->
                        <a class="page" href="/faq">Часто задаваемые вопросы</a>
                        <a class="page" href="/about">О нас</a>
                    </div>
                </div>
                <div class="box__content__right">
                    <div class="box__content__right__contact">
                        <!-- <p class="title__pages">Наши контакты</p> -->
                        <a class="page" href="https://2gis.ru/abakan/geo/9711522351700378/91.436042,53.742402">г.
                            Абакан,
                            ул. Кати Перекрещенко, 18а к2</a>
                        <!-- <a class="page" href="https://2gis.ru/abakan/geo/9711522351700378/91.436042,53.742402">Мы на
                        2ГИС</a> -->
                        <a class="page" href="mailto:Lombardbrat19@gmail.com">Lombardbrat19@gmail.com</a>
                    </div>
                    <div class="box__content__right__pages">
                        <!-- <p class="title__pages">Pages</p> -->
                        <nav class="nav__page">
                            <!-- <router-link class="page" v-for="link in links" :key="link.id" :to="link.url">{{ link.title
                            }}</router-link> -->
                            <a class="page" href="tel:+79832584649">+7 (983) 258 4649</a>
                            <a class="page" href="tel:+79831940078">+7 (983) 194 0078</a>
                            <div class="footer__links">
                                <a href="https://t.me/Pachoo1e" class="t-sociallinks__svg" target="_blank"
                                    rel="nofollow noopener" aria-label="telegram"
                                    style="width: 30px; height: 30px;"><svg width="30" height="30" viewBox="0 0 48 48"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
                                            fill="url(#paint0_linear)" />
                                        <path
                                            d="M8.93822 25.174C11.7438 23.6286 14.8756 22.3388 17.8018 21.0424C22.836 18.919 27.8902 16.8324 32.9954 14.8898C33.9887 14.5588 35.7734 14.2351 35.9484 15.7071C35.8526 17.7907 35.4584 19.8621 35.188 21.9335C34.5017 26.4887 33.7085 31.0283 32.935 35.5685C32.6685 37.0808 30.774 37.8637 29.5618 36.8959C26.6486 34.9281 23.713 32.9795 20.837 30.9661C19.8949 30.0088 20.7685 28.6341 21.6099 27.9505C24.0093 25.5859 26.5539 23.5769 28.8279 21.0901C29.4413 19.6088 27.6289 20.8572 27.0311 21.2397C23.7463 23.5033 20.5419 25.9051 17.0787 27.8945C15.3097 28.8683 13.2479 28.0361 11.4797 27.4927C9.89428 26.8363 7.57106 26.175 8.93806 25.1741L8.93822 25.174Z"
                                            fill="white" />
                                        <defs>
                                            <linearGradient id="paint0_linear" x1="18.0028" y1="2.0016" x2="6.0028"
                                                y2="30" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#37AEE2" />
                                                <stop offset="1" stop-color="#1E96C8" />
                                            </linearGradient>
                                        </defs>
                                    </svg></a>
                                <a href="https://wa.me/79832584649?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%83%20%D0%BC%D0%B5%D0%BD%D1%8F%20%D0%B5%D1%81%D1%82%D1%8C%20%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81"
                                    class="t-sociallinks__svg" target="_blank" rel="nofollow noopener"
                                    aria-label="whatsapp" style="width: 30px; height: 30px;"><svg width="30" height="30"
                                        viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
                                            fill="#25D366" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M24.7911 37.3525H24.7852C22.3967 37.3517 20.0498 36.7524 17.9653 35.6154L10.4 37.6L12.4246 30.2048C11.1757 28.0405 10.5186 25.5855 10.5196 23.0702C10.5228 15.2017 16.9248 8.79999 24.7909 8.79999C28.6086 8.80164 32.1918 10.2879 34.8862 12.9854C37.5806 15.6828 39.0636 19.2683 39.0621 23.0815C39.059 30.9483 32.6595 37.3493 24.7911 37.3525ZM18.3159 33.0319L18.749 33.2889C20.5702 34.3697 22.6578 34.9415 24.7863 34.9423H24.7911C31.3288 34.9423 36.6499 29.6211 36.6525 23.0807C36.6538 19.9112 35.4212 16.9311 33.1817 14.689C30.9422 12.4469 27.964 11.2115 24.7957 11.2104C18.2529 11.2104 12.9318 16.5311 12.9292 23.0711C12.9283 25.3124 13.5554 27.4951 14.7427 29.3836L15.0248 29.8324L13.8265 34.2095L18.3159 33.0319ZM31.4924 26.154C31.7411 26.2742 31.9091 26.3554 31.9808 26.4751C32.0699 26.6238 32.0699 27.3378 31.7729 28.1708C31.4756 29.0038 30.051 29.764 29.3659 29.8663C28.7516 29.9582 27.9741 29.9965 27.1199 29.725C26.602 29.5607 25.9379 29.3413 25.0871 28.9739C21.7442 27.5304 19.485 24.2904 19.058 23.678C19.0281 23.6351 19.0072 23.6051 18.9955 23.5895L18.9927 23.5857C18.804 23.3339 17.5395 21.6468 17.5395 19.9008C17.5395 18.2582 18.3463 17.3973 18.7177 17.001C18.7432 16.9739 18.7666 16.9489 18.7875 16.926C19.1144 16.569 19.5007 16.4797 19.7384 16.4797C19.9761 16.4797 20.2141 16.4819 20.4219 16.4924C20.4475 16.4937 20.4742 16.4935 20.5017 16.4933C20.7095 16.4921 20.9686 16.4906 21.2242 17.1045C21.3225 17.3407 21.4664 17.691 21.6181 18.0604C21.9249 18.8074 22.264 19.6328 22.3236 19.7522C22.4128 19.9307 22.4722 20.1389 22.3533 20.3769C22.3355 20.4126 22.319 20.4463 22.3032 20.4785C22.2139 20.6608 22.1483 20.7948 21.9967 20.9718C21.9372 21.0413 21.8756 21.1163 21.814 21.1913C21.6913 21.3407 21.5687 21.4901 21.4619 21.5965C21.2833 21.7743 21.0975 21.9672 21.3055 22.3242C21.5135 22.6812 22.2292 23.8489 23.2892 24.7945C24.4288 25.8109 25.4192 26.2405 25.9212 26.4582C26.0192 26.5008 26.0986 26.5352 26.1569 26.5644C26.5133 26.7429 26.7213 26.713 26.9294 26.4751C27.1374 26.2371 27.8208 25.4338 28.0584 25.0769C28.2961 24.7201 28.5339 24.7795 28.8607 24.8984C29.1877 25.0176 30.9408 25.8801 31.2974 26.0586C31.367 26.0934 31.4321 26.1249 31.4924 26.154Z"
                                            fill="#FDFDFD" />
                                    </svg></a>
                                <a href="https://2gis.ru/abakan/geo/9711522351700378/91.436042,53.742402"
                                    class="t-sociallinks__svg" style="width: 30px; height: 30px;"><svg width="30"
                                        height="30" xmlns:dc="http://purl.org/dc/elements/1.1/"
                                        xmlns:cc="http://creativecommons.org/ns#"
                                        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                                        xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                                        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1"
                                        viewBox="0 0 512 512" id="svg2" inkscape:version="0.91+devel r14221 custom"
                                        sodipodi:docname="gnome-maps.svg">
                                        <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1"
                                            objecttolerance="10" gridtolerance="10" guidetolerance="10"
                                            inkscape:pageopacity="0" inkscape:pageshadow="2"
                                            inkscape:window-width="1920" inkscape:window-height="1017" id="namedview42"
                                            showgrid="false" inkscape:zoom="3.2695312" inkscape:cx="236.3351"
                                            inkscape:cy="171.16946" inkscape:window-x="0" inkscape:window-y="32"
                                            inkscape:window-maximized="1" inkscape:current-layer="svg2" />
                                        <metadata id="metadata82">
                                            <rdf:RDF>
                                                <cc:Work rdf:about="">
                                                    <dc:format>image/svg+xml</dc:format>
                                                    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                                                    <dc:title />
                                                </cc:Work>
                                            </rdf:RDF>
                                        </metadata>
                                        <defs id="defs80">
                                            <clipPath clipPathUnits="userSpaceOnUse" id="clipPath4316">
                                                <rect
                                                    style="opacity:0.3;fill:#d6d6d6;fill-opacity:1;stroke:none;stroke-width:2;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                                                    id="rect4318" width="286.09323" height="286.09323" x="107.56334"
                                                    y="130.28922" rx="23.152618" ry="23.152618" />
                                            </clipPath>
                                            <clipPath clipPathUnits="userSpaceOnUse" id="clipPath4316-2">
                                                <rect
                                                    style="opacity:0.3;fill:#d6d6d6;fill-opacity:1;stroke:none;stroke-width:2;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                                                    id="rect4318-5" width="286.09323" height="286.09323" x="107.56334"
                                                    y="130.28922" rx="23.152618" ry="23.152618" />
                                            </clipPath>
                                        </defs>
                                        <path
                                            style="opacity:1;fill:#367bf0;fill-opacity:1;stroke:none;stroke-width:2.02766919;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                                            d="m 44.177937,274.11438 0,170.42123 C 44.177937,464.73686 60.441088,481 80.64232,481 l 335.99112,0 c 20.20122,-10e-6 36.46439,-16.26314 36.46439,-36.46439 l 0,-170.42123 z"
                                            id="rect4356" inkscape:connector-curvature="0"
                                            sodipodi:nodetypes="csssscc" />
                                        <path
                                            style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:2.4126606;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                                            d="M 282.69628,277.81317 249.74666,309.4361 414.55825,481 l 2.07519,0 c 16.94896,-10e-6 31.12112,-11.44958 35.2466,-27.06662 z"
                                            id="rect4322" inkscape:connector-curvature="0"
                                            sodipodi:nodetypes="cccscc" />
                                        <path style="fill:#d6d6d6;fill-opacity:1;stroke-width:1.24858344"
                                            d="M 452.67188 102.92773 L 272.61719 281.14648 L 275.73438 284.49414 L 282.69531 277.8125 L 451.87891 453.92969 C 452.67167 450.93453 453.09766 447.78684 453.09766 444.53516 L 453.09766 108.54297 C 453.09766 106.63245 452.95238 104.75738 452.67188 102.92773 z M 451.73828 454.43359 C 451.66123 454.70918 451.58524 454.98494 451.50195 455.25781 C 451.58536 454.98513 451.66111 454.709 451.73828 454.43359 z M 451.2832 455.93164 C 451.20113 456.18283 451.12053 456.43487 451.0332 456.68359 C 451.12072 456.43485 451.20095 456.18285 451.2832 455.93164 z M 450.74023 457.46875 C 450.66972 457.65563 450.60277 457.84391 450.5293 458.0293 C 450.60289 457.84397 450.6696 457.65558 450.74023 457.46875 z M 450.12305 459.00195 C 450.06991 459.12541 450.0193 459.25031 449.96484 459.37305 C 450.01941 459.25028 450.0698 459.12543 450.12305 459.00195 z M 449.48438 460.4043 C 449.43584 460.50504 449.38928 460.60681 449.33984 460.70703 C 449.38929 460.60693 449.43582 460.50492 449.48438 460.4043 z M 448.80078 461.74805 C 448.75543 461.83297 448.71202 461.91939 448.66602 462.00391 C 448.71215 461.91927 448.75529 461.83309 448.80078 461.74805 z "
                                            id="path6" />
                                        <text x="-1010.5652" y="300.47418" id="text14"
                                            style="font-size:175.40873718px;line-height:125%;font-family:'Gentium Book Basic';letter-spacing:0;word-spacing:0;stroke-width:0.87704366"
                                            sodipodi:linespacing="125%">
                                            <tspan x="-1010.5652" y="300.47418" id="tspan16"
                                                style="stroke-width:0.87704366" />
                                        </text>
                                        <text x="671.43817" y="249.57928" id="text30"
                                            style="font-size:113.34034729px;line-height:125%;font-family:'Gentium Book Basic';letter-spacing:0;word-spacing:0;stroke-width:0.87704366"
                                            sodipodi:linespacing="125%">
                                            <tspan x="671.43817" y="249.57928" id="tspan32"
                                                style="stroke-width:0.87704366" />
                                        </text>
                                        <text x="340.17175" y="695.29785" transform="scale(4.0128205,0.24920128)"
                                            id="text34"
                                            style="font-size:41.18049622px;font-family:Arial;text-anchor:middle;stroke-width:0.87703919" />
                                        <text x="1181.2373" y="179.41579" id="text36"
                                            style="font-size:113.34034729px;line-height:125%;font-family:'Gentium Book Basic';letter-spacing:0;word-spacing:0;stroke-width:0.87704366"
                                            sodipodi:linespacing="125%">
                                            <tspan x="1181.2373" y="179.41579" id="tspan38"
                                                style="stroke-width:0.87704366" />
                                        </text>
                                        <text x="467.21088" y="413.73315" transform="scale(4.0128205,0.24920128)"
                                            id="text40"
                                            style="font-size:41.18049622px;font-family:Arial;text-anchor:middle;stroke-width:0.87703919" />
                                        <text x="241.41479" y="20.442852" id="text42"
                                            style="font-size:113.34034729px;line-height:125%;font-family:'Gentium Book Basic';letter-spacing:0;word-spacing:0;stroke-width:0.87704366"
                                            sodipodi:linespacing="125%">
                                            <tspan x="241.41479" y="20.442852" id="tspan44"
                                                style="stroke-width:0.87704366" />
                                        </text>
                                        <text x="233.0063" y="-224.18129" transform="scale(4.0128205,0.24920128)"
                                            id="text46"
                                            style="font-size:41.18049622px;font-family:Arial;text-anchor:middle;stroke-width:0.87703919" />
                                        <text x="1204.4526" y="-169.41078" id="text48"
                                            style="font-size:113.34034729px;line-height:125%;font-family:'Gentium Book Basic';letter-spacing:0;word-spacing:0;stroke-width:0.87704366"
                                            sodipodi:linespacing="125%">
                                            <tspan x="1204.4526" y="-169.41078" id="tspan50"
                                                style="stroke-width:0.87704366" />
                                        </text>
                                        <text x="472.99933" y="-986.03894" transform="scale(4.0128205,0.24920128)"
                                            id="text52"
                                            style="font-size:41.18049622px;font-family:Arial;text-anchor:middle;stroke-width:0.87703919" />
                                        <text x="1714.2518" y="-239.57428" id="text54"
                                            style="font-size:113.34034729px;line-height:125%;font-family:'Gentium Book Basic';letter-spacing:0;word-spacing:0;stroke-width:0.87704366"
                                            sodipodi:linespacing="125%">
                                            <tspan x="1714.2518" y="-239.57428" id="tspan56"
                                                style="stroke-width:0.87704366" />
                                        </text>
                                        <text x="600.03845" y="-1267.5948" transform="scale(4.0128205,0.24920128)"
                                            id="text58"
                                            style="font-size:41.18049622px;font-family:Arial;text-anchor:middle;stroke-width:0.87703919" />
                                        <text x="1372.9767" y="-653.88971" id="text60"
                                            style="font-size:113.34034729px;line-height:125%;font-family:'Gentium Book Basic';letter-spacing:0;word-spacing:0;stroke-width:0.87704366"
                                            sodipodi:linespacing="125%">
                                            <tspan x="1372.9767" y="-653.88971" id="tspan62"
                                                style="stroke-width:0.87704366" />
                                        </text>
                                        <text x="514.99194" y="-2930.1543" transform="scale(4.0128205,0.24920128)"
                                            id="text64"
                                            style="font-size:41.18049622px;font-family:Arial;text-anchor:middle;stroke-width:0.87703919" />
                                        <text x="1882.767" y="-724.06201" id="text66"
                                            style="font-size:113.34034729px;line-height:125%;font-family:'Gentium Book Basic';letter-spacing:0;word-spacing:0;stroke-width:0.87704366"
                                            sodipodi:linespacing="125%">
                                            <tspan x="1882.767" y="-724.06201" id="tspan68"
                                                style="stroke-width:0.87704366" />
                                        </text>
                                        <text x="642.03113" y="-3211.719" transform="scale(4.0128205,0.24920128)"
                                            id="text70"
                                            style="font-size:41.18049622px;font-family:Arial;text-anchor:middle;stroke-width:0.87703919" />
                                        <text x="275.32132" y="516.70923" id="text72"
                                            style="font-size:182.71450806px;line-height:125%;font-family:'Gentium Book Basic';letter-spacing:0;word-spacing:0;stroke-width:0.87704366"
                                            sodipodi:linespacing="125%">
                                            <tspan x="275.32132" y="516.70923" id="tspan74"
                                                style="stroke-width:0.87704366" />
                                        </text>
                                        <path
                                            style="opacity:1;fill:#ffc831;fill-opacity:1;stroke:none;stroke-width:2.4126606;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                                            d="M 434.4607,76.705723 44.710597,450.74733 c 2.854067,16.75376 17.053291,29.53465 34.472356,30.21505 l 373.914877,-358.84399 0,-13.57588 c 0,-13.715676 -7.50081,-25.609346 -18.63713,-31.836787 z"
                                            id="rect4322-8" inkscape:connector-curvature="0" />
                                        <path style="fill:#1ba389;fill-opacity:1;stroke-width:1.24858344"
                                            d="M 80.642578 72.078125 C 60.44134 72.078125 44.177734 88.341722 44.177734 108.54297 L 44.177734 444.53516 C 44.177734 446.6538 44.372801 448.72462 44.716797 450.74219 L 423.74609 86.988281 L 370.13281 72.078125 L 80.642578 72.078125 z M 450.24414 94.355469 C 450.51249 94.99308 450.76937 95.63725 451.00195 96.292969 C 450.77099 95.63931 450.52102 94.994878 450.25391 94.359375 L 450.24414 94.355469 z M 451.15234 96.763672 C 451.33516 97.302242 451.5099 97.844809 451.66797 98.394531 C 451.51064 97.844206 451.33454 97.302814 451.15234 96.763672 z M 451.98047 99.597656 C 452.06125 99.919726 452.14266 100.24094 452.21484 100.56641 C 452.14301 100.24091 452.0608 99.919788 451.98047 99.597656 z M 452.48438 101.93164 C 452.51297 102.08872 452.53982 102.24651 452.56641 102.4043 L 452.57617 102.39453 C 452.5499 102.23867 452.51256 102.08682 452.48438 101.93164 z M 44.75 450.94727 C 44.818022 451.33299 44.890726 451.7163 44.970703 452.09766 C 44.890866 451.7164 44.817905 451.33288 44.75 450.94727 z M 45.152344 452.89453 C 45.291553 453.4912 45.44532 454.08119 45.613281 454.66602 C 45.445537 454.08121 45.291359 453.49119 45.152344 452.89453 z M 45.847656 455.47266 C 45.958238 455.82659 46.076322 456.17625 46.197266 456.52539 C 46.076544 456.17648 45.95803 455.82635 45.847656 455.47266 z M 46.501953 457.36914 C 46.615656 457.67284 46.726176 457.97759 46.847656 458.27734 C 46.726349 457.97773 46.615486 457.67271 46.501953 457.36914 z M 47.509766 459.80469 C 47.642448 460.09328 47.781959 460.37768 47.921875 460.66211 C 47.781941 460.3775 47.642444 460.09347 47.509766 459.80469 z M 48.365234 461.5332 C 48.464463 461.72193 48.553836 461.91678 48.65625 462.10352 L 48.666016 462.09375 C 48.564237 461.90808 48.463857 461.72084 48.365234 461.5332 z "
                                            id="path8" />
                                        <path
                                            d="m 346.4829,41.138347 c -67.01132,0 -121.30999,54.327853 -121.30999,121.339183 0,67.01132 121.30999,204.50148 121.30999,204.50148 0,0 121.33916,-137.49503 121.33916,-204.50148 0,-67.01133 -54.32785,-121.339183 -121.33916,-121.339183 m -2.08733,64.396803 c -30.27885,0 -54.82877,24.54992 -54.82877,54.83851 0,30.27887 24.54992,54.8385 54.83849,54.8385 30.27887,0 54.83851,-24.5499 54.83851,-54.82877 0,-30.27887 -24.54992,-54.82877 -54.82877,-54.82877"
                                            inkscape:connector-curvature="0" id="path76-9"
                                            style="opacity:0.3;fill:#000000;fill-opacity:0.99607843;stroke-width:0.87704366"
                                            sodipodi:nodetypes="cscsccsssc" />
                                        <path
                                            d="m 346.4829,31 c -67.01132,0 -121.30999,54.327853 -121.30999,121.33918 0,67.01133 121.30999,204.50148 121.30999,204.50148 0,0 121.33916,-137.49503 121.33916,-204.50148 C 467.82206,85.327853 413.49421,31 346.4829,31 m -2.08733,64.396811 c -30.27885,0 -54.82877,24.549909 -54.82877,54.838499 0,30.27887 24.54992,54.8385 54.83849,54.8385 30.27887,0 54.83851,-24.54989 54.83851,-54.82876 0,-30.27887 -24.54992,-54.828774 -54.82877,-54.828774"
                                            inkscape:connector-curvature="0" id="path76"
                                            style="fill:#f64747;fill-opacity:0.99607843;stroke-width:0.87704366"
                                            sodipodi:nodetypes="cscsccsssc" />
                                        <path
                                            d="m 344.41503,95.416276 c -30.27885,0 -54.82876,24.549914 -54.82876,54.838504 0,30.27887 24.54991,54.8385 54.83848,54.8385 30.27887,0 54.83851,-24.5499 54.83851,-54.82877 0,-30.27887 -24.54991,-54.828768 -54.82877,-54.828768"
                                            inkscape:connector-curvature="0" id="path76-8"
                                            style="opacity:0.3;fill:#000000;fill-opacity:0.99607843;stroke-width:0.87704366"
                                            sodipodi:nodetypes="csssc" />
                                        <path
                                            d="m 344.41503,105.55462 c -30.27885,0 -54.82876,24.54991 -54.82876,54.83851 0,30.27887 24.54991,54.83849 54.83848,54.83849 30.27887,0 54.83851,-24.54989 54.83851,-54.82876 0,-30.27887 -24.54991,-54.82877 -54.82877,-54.82877"
                                            inkscape:connector-curvature="0" id="path76-8-5"
                                            style="opacity:0.3;fill:#000000;fill-opacity:0.99607843;stroke-width:0.87704366"
                                            sodipodi:nodetypes="csssc" />
                                    </svg>
                                </a>
                                <a href="https://www.avito.ru/user/76b005576a948c0adf1f537a3d441d11/profile?src=fs&page_from=from_favorite_sellers"
                                    class="t-sociallinks__svg" style="width: 30px; height: 30px;"><svg width="30"
                                        height="30" viewBox="0 0 410 379" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M122.559 378.864C190.246 378.864 245.118 323.992 245.118 256.305C245.118 188.617 190.246 133.746 122.559 133.746C54.8715 133.746 0 188.617 0 256.305C0 323.992 54.8715 378.864 122.559 378.864Z"
                                            fill="#04E061" />
                                        <path
                                            d="M335.168 363.397C376.069 363.397 409.225 330.24 409.225 289.339C409.225 248.438 376.069 215.282 335.168 215.282C294.267 215.282 261.11 248.438 261.11 289.339C261.11 330.24 294.267 363.397 335.168 363.397Z"
                                            fill="#FF4053" />
                                        <path
                                            d="M145.998 117.769C171.309 117.769 191.827 97.2511 191.827 71.9408C191.827 46.6305 171.309 26.1124 145.998 26.1124C120.688 26.1124 100.17 46.6305 100.17 71.9408C100.17 97.2511 120.688 117.769 145.998 117.769Z"
                                            fill="#965EEB" />
                                        <path
                                            d="M306.397 199.29C361.429 199.29 406.042 154.677 406.042 99.6452C406.042 44.6125 361.429 0 306.397 0C251.364 0 206.752 44.6125 206.752 99.6452C206.752 154.677 251.364 199.29 306.397 199.29Z"
                                            fill="#00AAFF" />
                                    </svg>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '@/components/Logo.vue';

export default {
    components: {
        Logo,
    },
    data() {
        return {
            links: [
                {
                    id: 1,
                    title: "Главная",
                    url: "/"
                },
                {
                    id: 2,
                    title: "Магазин",
                    url: "/shop"
                },
            ]
        }
    },
}

</script>

<style scoped lang="scss">
.footer {
    height: 256px;
    background-color: #111;
    flex: 0 0 auto;
}

.footer__links {
    margin-top: 16px;

}

.t-sociallinks__svg {
    margin: 0 24px 0 0;
}

.box__content {
    display: flex;
    justify-content: space-between;

    &__left {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 48%;

        &__logo {
            max-width: 400px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            margin-top: 50px;
        }

        &__info {
            display: flex;
            flex-direction: column;
            margin-top: 50px;

            &__title {
                font-size: 25px;
                margin-bottom: 24px;
                font-family: jost;
            }
        }
    }

    &__right {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 48%;

        &__contact {
            width: 258px;
            display: flex;
            flex-direction: column;
            margin-top: 50px;
        }

        &__pages {
            display: flex;
            flex-direction: column;
            width: 240px;
            margin-top: 50px;
        }
    }
}


.title__pages {
    font-size: 25px;
    margin-bottom: 24px;
    font-family: jost;
}


.nav__page {
    display: flex;
    flex-direction: column;
}

.page {
    font-weight: 400;
    font-family: "Jost", sans-serif;
    font-size: 22px;
    margin: 8px 0;
    color: goldenrod;
}

a:hover {
    color: gold;
}

@media (max-width: 1200px) and (min-width: 768px) {
    .box__content {
        flex-direction: column;

        &__right {
            margin-bottom: 24px;
            width: 100%;
            justify-content: space-around
        }

        &__left {
            width: 100%;
            justify-content: space-around
        }
    }
}

@media (max-width: 767px) and (min-width: 320px) {
    .box__content {
        flex-direction: column;

        &__right {
            margin-bottom: 8px;
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: center;

            &__contact {
                align-items: center;
            }

            &__pages {
                align-items: center;
            }
        }

        &__left {
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: center;
        }
    }
}
</style>