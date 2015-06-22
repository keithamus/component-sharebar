import React from 'react';

export default class ShareBar extends React.Component {

  propTypes: {
    title: React.propTypes.string,
    titleTag: React.propTypes.string,

  }

  static get defaultProps() {
    return {
      useSvg: false,
      layout: 'horizontal',
      icons: [
        {
          href: "http://www.facebook.com/sharer/sharer.php?u=http://election.economist.com",
          title: "Share on Facebook",
          className: "fb",
          src: "images/socialicons/facebook.png"
        },
        {
          href: "https://twitter.com/intent/tweet?url=http://election.economist.com",
          title: "Share on Twitter",
          className: "twitter",
          src: "images/socialicons/twitter.png"
        },
        {
          href: "https://plus.google.com/share?url=http://election.economist.com",
          title: "Share on Google Plus",
          className: "gplus",
          src: "images/socialicons/googleplus.png"
        },
        {
          href: "https://www.linkedin.com/cws/share?url=http://election.economist.com",
          title: "Linked In",
          className: "linkedin",
          src: "images/socialicons/linkedin.png"
        },
        {
          href: "whatsapp://send?text=http://election.economist.com",
          title: "",
          className: "whatsapp",
          src: "images/socialicons/whatsapp.png"
        },
        {
          href: "http://www.economist.com/node/21644150/email/",
          title: "Email a friend",
          className: "mail",
          src: "images/socialicons/mail.png"
        }
      ]
    }
  }

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    if(this.props.title){
      this.props.titleTag = <h3>{this.props.title}</h3>
    } else {
      this.props.titleTag = '';
    }
  }

  render() {
    // JSX doesn't support NS
    var svgSymbols = {
      fb: '<use xlink:href="#icon-facebook3"></use>',
      twitter: '<use xlink:href="#icon-twitter3"></use>',
      gplus: '<use xlink:href="#icon-google-plus3"></use>',
      linkedin: '<use xlink:href="#icon-linkedin3"></use>',
      whatsapp: '<use xlink:href="#icon-whatsapp"></use>',
      mail: '<use xlink:href="#icon-mail4"></use>'
    },
    svg = `<defs>
            <symbol id="icon-mail4" viewBox="0 0 32 32">
                    <title>Email</title>
                    <path class="path1" d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM8 8h16c0.286 0 0.563 0.061 0.817 0.177l-8.817 10.286-8.817-10.287c0.254-0.116 0.531-0.177 0.817-0.177zM6 22v-12c0-0.042 0.002-0.084 0.004-0.125l5.864 6.842-5.8 5.8c-0.045-0.167-0.069-0.34-0.069-0.517zM24 24h-16c-0.177 0-0.35-0.024-0.517-0.069l5.691-5.691 2.826 3.297 2.826-3.297 5.691 5.691c-0.167 0.045-0.34 0.069-0.517 0.069zM26 22c0 0.177-0.024 0.35-0.069 0.517l-5.8-5.8 5.865-6.842c0.003 0.041 0.004 0.083 0.004 0.125v12z"></path>
                  </symbol>
                  <symbol id="icon-google-plus3" viewBox="0 0 1024 1024">
                    <title>Google Plus</title>
                    <path class="path1" d="M437.006 818.162c0 75.068-46.39 134.392-177.758 139.176-76.984-43.786-141.49-106.952-186.908-182.866 23.69-58.496 97.692-103.046 182.316-102.114 24.022 0.252 46.41 4.114 66.744 10.7 55.908 38.866 101 63.152 112.324 107.448 2.114 8.964 3.282 18.206 3.282 27.656zM512 0c-147.94 0-281.196 62.77-374.666 163.098 36.934-20.452 80.538-32.638 126.902-32.638 67.068 0 256.438 0 256.438 0l-57.304 60.14h-67.31c47.496 27.212 72.752 83.248 72.752 145.012 0 56.692-31.416 102.38-75.78 137.058-43.28 33.802-51.492 47.966-51.492 76.734 0 24.542 51.722 61.098 75.5 78.936 82.818 62.112 99.578 101.184 99.578 178.87 0 78.726-68.936 157.104-185.866 183.742 56.348 21.338 117.426 33.048 181.248 33.048 282.77 0 512-229.23 512-512s-229.23-512-512-512zM768 384v128h-64v-128h-128v-64h128v-128h64v128h128v64h-128zM365.768 339.472c11.922 90.776-27.846 149.19-96.934 147.134-69.126-2.082-134.806-65.492-146.74-156.242-11.928-90.788 34.418-160.254 103.53-158.196 69.090 2.074 128.22 76.542 140.144 167.304zM220.886 642.068c-74.68 0-138.128 25.768-182.842 63.864-24.502-59.82-38.044-125.29-38.044-193.932 0-56.766 9.256-111.368 26.312-162.396 7.374 99.442 77.352 176.192 192.97 176.192 8.514 0 16.764-0.442 24.874-1.022-7.95 15.23-13.622 32.19-13.622 49.982 0 29.97 16.488 47.070 36.868 66.894-15.402 0-30.27 0.418-46.516 0.418z"></path>
                  </symbol>
                  <symbol id="icon-facebook3" viewBox="0 0 1024 1024">
                    <title>Facebook</title>
                    <path class="path1" d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512v-384h-128v-128h128v-96c0-88.366 71.632-160 160-160h160v128h-160c-17.674 0-32 14.328-32 32v96h176l-32 128h-144v367.87c220.828-56.838 384-257.3 384-495.87 0-282.77-229.23-512-512-512z"></path>
                  </symbol>
                  <symbol id="icon-twitter3" viewBox="0 0 1024 1024">
                    <title>Twitter</title>
                    <path class="path1" d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM766.478 381.48c0.252 5.632 0.38 11.296 0.38 16.988 0 173.51-132.070 373.588-373.584 373.588-74.15 0-143.168-21.738-201.276-58.996 10.272 1.218 20.724 1.84 31.322 1.84 61.518 0 118.134-20.992 163.072-56.21-57.458-1.054-105.948-39.020-122.658-91.184 8.018 1.532 16.244 2.36 24.704 2.36 11.976 0 23.578-1.61 34.592-4.61-60.064-12.066-105.326-65.132-105.326-128.75 0-0.554 0-1.104 0.012-1.652 17.7 9.834 37.948 15.742 59.47 16.424-35.232-23.546-58.414-63.736-58.414-109.292 0-24.064 6.476-46.62 17.78-66.010 64.76 79.44 161.51 131.712 270.634 137.19-2.238-9.612-3.4-19.632-3.4-29.924 0-72.512 58.792-131.298 131.304-131.298 37.766 0 71.892 15.944 95.842 41.462 29.908-5.886 58.008-16.814 83.38-31.862-9.804 30.662-30.624 56.394-57.732 72.644 26.56-3.174 51.866-10.232 75.412-20.674-17.594 26.328-39.854 49.454-65.514 67.966z"></path>
                  </symbol>
                  <symbol id="icon-feed4" viewBox="0 0 1024 1024">
                    <title>RSS</title>
                    <path class="path1" d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM320 768c-35.346 0-64-28.654-64-64s28.654-64 64-64 64 28.654 64 64-28.654 64-64 64zM496 768c0-132.336-107.664-240-240-240v-96c185.272 0 336 150.728 336 336h-96zM688 768c0-115.39-44.936-223.876-126.53-305.47s-190.078-126.53-305.47-126.53v-96c141.034 0 273.626 54.922 373.354 154.648 99.724 99.726 154.646 232.318 154.646 373.352h-96z"></path>
                  </symbol>
                  <symbol id="icon-linkedin3" viewBox="0 0 1024 1024">
                    <title>LinkedIn</title>
                    <path class="path1" d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM384 832h-128v-448h128v448zM320 320c-35.346 0-64-28.654-64-64s28.654-64 64-64 64 28.654 64 64-28.654 64-64 64zM832 832h-128v-256c0-35.346-28.654-64-64-64s-64 28.654-64 64v256h-128v-448h128v79.472c26.398-36.264 66.752-79.472 112-79.472 79.53 0 144 71.634 144 160v288z"></path>
                  </symbol>
                  <symbol id="icon-whatsapp" viewBox="0 0 28.6 28.6">
                    <title>WhatsApp</title>
                    <path d="M14.3,0.4c-7.7,0-14,6.3-14,14s6.3,14,14,14s14-6.3,14-14S22,0.4,14.3,0.4z M14.6,22c-1.5,0-2.8-0.4-4-1 l-4.6,1.5L7.4,18c-0.8-1.3-1.2-2.7-1.2-4.3c0-4.6,3.7-8.3,8.4-8.3c4.6,0,8.4,3.7,8.4,8.3C23,18.3,19.2,22,14.6,22z"></path>
                    <path d="M14.6,6.7c-3.9,0-7,3.1-7,7c0,1.5,0.5,2.9,1.3,4.1L8,20.4l2.7-0.9c1.1,0.7,2.4,1.2,3.9,1.2c3.9,0,7-3.1,7-7 C21.6,9.8,18.5,6.7,14.6,6.7z M18.7,16.6c-0.2,0.5-1,0.9-1.4,1c-0.4,0-0.4,0.3-2.5-0.5c-2.1-0.8-3.4-2.9-3.5-3.1 c-0.1-0.1-0.8-1.1-0.8-2.1c0-1,0.5-1.5,0.7-1.7c0.2-0.2,0.4-0.3,0.5-0.3c0.1,0,0.3,0,0.4,0c0.1,0,0.3-0.1,0.5,0.3 c0.2,0.4,0.6,1.4,0.6,1.5c0.1,0.1,0.1,0.2,0,0.4s-0.1,0.2-0.2,0.3c-0.1,0.1-0.2,0.3-0.3,0.4c-0.1,0.1-0.2,0.2-0.1,0.4 c0.1,0.2,0.5,0.9,1.1,1.4c0.8,0.7,1.4,0.9,1.6,1c0.2,0.1,0.3,0.1,0.4-0.1c0.1-0.1,0.5-0.6,0.6-0.8c0.1-0.2,0.3-0.2,0.5-0.1 c0.2,0.1,1.2,0.6,1.4,0.7c0.2,0.1,0.3,0.2,0.4,0.2C18.9,15.7,18.9,16.1,18.7,16.6z"></path>
                  </symbol>
                </defs>`

    return (
      <div className={"mnv-ec-share " + ((this.props.useSvg) ? 'use-svg' : 'use-img') + " " + this.props.layout }>
        {this.props.useSvg ? <svg className="svgMap" width="0" height="0" version="1.1" dangerouslySetInnerHTML={{__html: svg }}></svg> : "" }
        {this.props.titleTag}
        <div className="mnv-ec-share-icons">
            {this.props.icons.map(function(icon, key){
            return (
                    <a key={key} href={icon.href} title={icon.title} className={icon.className} target="_blank">
                      {this.props.useSvg ? <svg viewBox="0 0 100 100" dangerouslySetInnerHTML={{__html: svgSymbols[icon.className] }}></svg> : <img src={icon.src} /> }
                    </a>
                  );
            }, this)}
        </div>
      </div>
    );
  }
}