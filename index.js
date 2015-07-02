import React from 'react';
import Icon from './../component-icon';

export default class ShareBar extends React.Component {

  static propTypes = {
    title: React.PropTypes.string,
    titleTag: React.PropTypes.string,
    customClass: React.PropTypes.string
  }

  state = {
    isMobile: 'no-mobile'
  }

  static defaultProps = {
    useSvg: true,
    layout: 'horizontal',
    icons: [
      {
        href: "http://www.facebook.com/sharer/sharer.php?u=http://election.economist.com",
        title: "Share on Facebook",
        className: "fb",
        type: "facebook",
        src: "http://cdn.static-economist.com/sites/default/files/external/components/assets/images/socialicons/facebook.png",
        s: {
          events: "event76"
        }
      },
      {
        href: "https://twitter.com/intent/tweet?url=http://election.economist.com",
        title: "Share on Twitter",
        className: "twitter",
        type: "twitter",
        src: "http://cdn.static-economist.com/sites/default/files/external/components/assets/images/socialicons/twitter.png",
        s: {
          events: "event31"
        }
      },
      {
        href: "https://plus.google.com/share?url=http://election.economist.com",
        title: "Share on Google Plus",
        className: "gplus",
        type: "googleplus",
        src: "http://cdn.static-economist.com/sites/default/files/external/components/assets/images/socialicons/googleplus.png",
        s: {
          events: "event35"
        }
      },
      {
        href: "https://www.linkedin.com/cws/share?url=http://election.economist.com",
        title: "Linked In",
        className: "linkedin",
        type: "linkedin",
        src: "http://cdn.static-economist.com/sites/default/files/external/components/assets/images/socialicons/linkedin.png",
        s: {
          events: "event49"
        }
      },
      {
        href: "whatsapp://send?text=http://election.economist.com",
        title: "",
        className: "whatsapp",
        type: "whatsapp",
        src: "http://cdn.static-economist.com/sites/default/files/external/components/assets/images/socialicons/whatsapp.png",
        s: {
          events: ""
        }
      },
      {
        href: "http://www.economist.com/node/21644150/email/",
        title: "Email a friend",
        className: "mail",
        type: "mail",
        src: "http://cdn.static-economist.com/sites/default/files/external/components/assets/images/socialicons/mail.png",
        s: {
          events: "event97,event81"
        }
      }
    ],
    s: {
      visitorNamespace: "economist",
      trackingServer: "stats.economist.com",
      trackingServerSecure: "sstats.economist.com",
      dc: "122",
      linkTrackVars: "events,pageName,prop45,eVar52,eVar53",
      linkTrackEvents: "",
      events: "",
      pageName: "This is the pageName"
    },
    Omniture: {
      position: "share-bar",
      page: "Name of the page",
      hostpage: "hostpage",
      linkinfo: ["the_world_if","section","article headline"]
    }
  }
  // TODO This part need to be implemented at page level
  componentDidMount(){
    window.s = s_gi((process.env.NODE_ENV === "production") ? 'economistcomprod' :  'economistcomdev');
    // Add here s variables for the page
    window.s = Object.assign(s, this.props.s);
  }

  componentWillMount(){
    if(this.props.title){
      this.props.titleTag = <h3>{this.props.title}</h3>
    }
    if (typeof navigator !== 'undefined') {
      this.setState({
        isMobile: (navigator.userAgent.match(/Android|iPhone/i) && !navigator.userAgent.match(/iPod|iPad/i)) ? 'mobile' : 'no-mobile'
      });
    }
  }

  _handleClick(icon, event) {
    (event.preventDefault) ? event.preventDefault() : (event.returnValue = false);
    if(event.target.parentNode.className!=='mail' || event.target.parentNode.className!=='twitter'){
      window.open(event.target.parentNode.getAttribute('href'), event.target.parentNode.getAttribute('target'), "scrollbars=1,resizable=1,height=550,width=550");
    }
    this._omnitureRegisterClick(event.target, icon);
  }

  _omnitureRegisterClick(link, icon) {
    var hublinkinfo = this.props.Omniture.linkinfo, hostpage = this.props.Omniture.hostpage, linkPosition = this.props.Omniture.position;
    s = Object.assign(s, this.props.s);
    s.linkTrackEvents = s.events = "event97," + icon.s.events;
    s.prop45 = hublinkinfo.join('>') + ">" + icon.title + ">" + linkPosition + ">" + icon.title;
    s.eVar52 = s.eVar53 = hublinkinfo.join('>') + ">"+ icon.title + ">" + hostpage + ">" + linkPosition + ">" + icon.title;
    console.log(s);
    s.tl(s.prop45,"o",s.prop45);
  }

  render() {
    return (
      <div className={`mnv-ec-share ${this.props.useSvg ? 'use-svg' : 'use-img'} ${this.props.layout} ${this.state.isMobile} ${this.props.customClass}`}>
        {this.props.titleTag ? this.props.titleTag : null}
        <div className="mnv-ec-share-icons">
            {this.props.icons.map((icon, key) => {
            return (
                    <a key={key} onClick={this._handleClick.bind(this, icon)} href={icon.href} title={icon.title} className={icon.className} target="_blank">
                      {this.props.useSvg ? <Icon type={icon.type} /> : <img src={icon.src} /> }
                    </a>
                  );
            })}
        </div>
      </div>
    );
  }
}