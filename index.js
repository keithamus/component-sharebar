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
    layout: 'horizontal',
    background: false,
    fxDefaultStateBackground: false,
    useFX: false,
    fxDirection: '',
    fxType: '',
    icon: {
      color: "#FFFFFF"
    },
    icons: [
      {
        href: "http://www.facebook.com/sharer/sharer.php?u=http://election.economist.com",
        title: "Share on Facebook",
        className: "fb",
        type: "facebook",
        s: {
          events: "event76"
        }
      },
      {
        href: "https://twitter.com/intent/tweet?url=http://election.economist.com",
        title: "Share on Twitter",
        className: "twitter",
        type: "twitter",
        s: {
          events: "event31"
        }
      },
      {
        href: "https://plus.google.com/share?url=http://election.economist.com",
        title: "Share on Google Plus",
        className: "gplus",
        type: "googleplus",
        s: {
          events: "event35"
        }
      },
      {
        href: "https://www.linkedin.com/cws/share?url=http://election.economist.com",
        title: "Linked In",
        className: "linkedin",
        type: "linkedin",
        s: {
          events: "event49"
        }
      },
      {
        href: "whatsapp://send?text=http://election.economist.com",
        title: "",
        className: "whatsapp",
        type: "whatsapp",
        s: {
          events: ""
        }
      },
      {
        href: "http://www.economist.com/node/21644150/email/",
        title: "Email a friend",
        className: "mail",
        type: "mail",
        s: {
          events: "event81"
        }
      }
    ]
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
    if(event.target.className=='mail'){
      window.open(event.target.getAttribute('href'), "_blank");
    } else {
      window.open(event.target.getAttribute('href'), event.target.getAttribute('target'), "scrollbars=1,resizable=1,height=550,width=550");
    }
    this._omnitureRegisterClick(event.target, icon);
  }

  _omnitureRegisterClick(link, customVars) {
    var hublinkinfo = this.props.Omniture.linkinfo, hostpage = this.props.Omniture.hostpage, linkPosition = this.props.Omniture.position;
    s = Object.assign(s, this.props.s);
    s.linkTrackEvents = s.events = "event97," + customVars.s.events;
    s.prop45 = hublinkinfo[0] + ">" + linkPosition + ">" + customVars.title;
    var root = hublinkinfo.shift();
    s.eVar52 = s.eVar53 = root + ">" + hostpage + ">" + linkPosition + ">" + hublinkinfo.join('>') + ">" + customVars.title;
    s.tl(s.prop45,"o",s.prop45);
  }

  render() {
    return (
      <div className={`mnv-ec-share ${this.props.layout} ${this.state.isMobile} ${this.props.customClass} ${this.props.fxDirection} ${this.props.fxType}`}>
        {this.props.titleTag ? this.props.titleTag : null}
        {this.props.useFX ? <div className="default-state" style={(this.props.fxDefaultStateBackground) ? { background: this.props.fxDefaultStateBackground } : null }><Icon type="share" color={this.props.icon.color} background="none" /></div> : null}
        <div className="mnv-ec-share-icons" style={(this.props.background) ? { background: this.props.background } : null }>
            {this.props.icons.map((icon, key) => {
            return (
                    <a key={key} onClick={this._handleClick.bind(this, icon)} href={icon.href} title={icon.title} className={icon.className} target="_blank">
                      <Icon type={icon.type} color={this.props.icon.color} />
                    </a>
                  );
            })}
        </div>
      </div>
    );
  }
}