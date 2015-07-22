import React from 'react';
import Icon from '@economist/component-icon';

export default class ShareBar extends React.Component {

  static get propTypes() {
    return {
      title: React.PropTypes.string,
      titleTag: React.PropTypes.string,
      customClass: React.PropTypes.string,
      Omniture: React.PropTypes.object,
      s: React.PropTypes.object,
      layout: React.PropTypes.string,
      useFX: React.PropTypes.bool,
      fxDirection: React.PropTypes.string,
      fxType: React.PropTypes.string,
      background: React.PropTypes.string,
      icon: React.PropTypes.object,
      icons: React.PropTypes.array,
    };
  }

  static get defaultProps() {
    return {
      layout: 'horizontal',
      background: 'none',
      useFX: false,
      fxDirection: '',
      fxType: '',
      icon: {
        color: '#FFFFFF',
      },
      icons: [
        {
          href: 'http://www.facebook.com/sharer/sharer.php?u=http://election.economist.com',
          title: 'Share on Facebook',
          className: 'fb',
          size: '100%',
          icon: 'facebook',
          s: {
            events: 'event76',
          },
        },
        {
          href: 'https://twitter.com/intent/tweet?url=http://election.economist.com',
          title: 'Share on Twitter',
          className: 'twitter',
          size: '100%',
          icon: 'twitter',
          s: {
            events: 'event31',
          },
        },
        {
          href: 'https://plus.google.com/share?url=http://election.economist.com',
          title: 'Share on Google Plus',
          className: 'gplus',
          size: '100%',
          icon: 'googleplus',
          s: {
            events: 'event35',
          },
        },
        {
          href: 'https://www.linkedin.com/cws/share?url=http://election.economist.com',
          title: 'Linked In',
          className: 'linkedin',
          size: '100%',
          icon: 'linkedin',
          s: {
            events: 'event49',
          },
        },
        {
          href: 'whatsapp://send?text=http://election.economist.com',
          title: '',
          className: 'whatsapp',
          size: '100%',
          icon: 'whatsapp',
          s: {
            events: '',
          },
        },
        {
          href: 'http://www.economist.com/node/21644150/email/',
          title: 'Email a friend',
          className: 'mail',
          size: '100%',
          icon: 'mail',
          s: {
            events: 'event81',
          },
        },
      ],
    };
  }

  constructor() {
    super();
    this.state = { isMobile: 'no-mobile', fxState: 'fxOff', open: false };
  }

  componentWillMount() {
    if (this.props.title) {
      this.props.titleTag = <h3>{this.props.title}</h3>;
    }
    if (typeof navigator !== 'undefined') {
      this.setState({
        isMobile: (navigator.userAgent.match(/Android|iPhone/i) &&
        !navigator.userAgent.match(/iPod|iPad/i))
        ? 'mobile' : 'no-mobile',
      });
    }
  }

  handleClick(icon, event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
    if (event.target.className === 'mail') {
      window.open(event.target.getAttribute('href'), '_blank');
    } else {
      window.open(event.target.getAttribute('href'),
      event.target.getAttribute('target'),
      'scrollbars=1,resizable=1,height=550,width=550');
    }
    this.omnitureRegisterClick(event.target, icon);
  }

  omnitureRegisterClick(link, customVars) {
    const hublinkinfo = this.props.Omniture.linkinfo;
    const hostpage = this.props.Omniture.hostpage;
    const linkPosition = this.props.Omniture.position;
    /* globals s */
    window.s = Object.assign(s, this.props.s);
    window.s.linkTrackEvents = window.s.events = 'event97,' + customVars.s.events;
    window.s.prop45 = hublinkinfo[0] + '>' + linkPosition + '>' + customVars.title;
    const root = hublinkinfo.shift();
    window.s.eVar52 = window.s.eVar53 = root + '>' + hostpage + '>' +
    linkPosition + '>' + hublinkinfo.join('>') + '>' + customVars.title;
    window.s.tl(window.s.prop45, 'o', window.s.prop45);
  }
  /* This functionality is required for touch devices when hover is not triggered */

  toggleExpanded() {
    if (this.state.open) {
      this.close();
    } else {
      this.open();
    }
  }

  close() {
    this.setState({ open: false });
    this.setState({ fxState: 'fxOff' });
  }

  open() {
    this.setState({ open: true });
    this.setState({ fxState: 'fxOn' });
  }


  render() {
    let fxPanel;
    if (this.props.useFX) {
      fxPanel = (
        <div className="default-state">
        </div>
      );
    }
    return (
      <div className="container">
        <div className="controls">
          <div className="mnv-ec-share-icons-close-open" onClick={this.toggleExpanded.bind(this)}>
            <div className="share" data-open={this.state.open}>
              <Icon icon="share" color={this.props.icon.color} background="none" size="100%"/>
            </div>
            <div className="close" data-open={this.state.open}>
              <Icon icon="close" color={this.props.icon.color} background="none" size="100%"/>
            </div>
          </div>
        </div>

      <div className={`mnv-ec-share
        ${this.props.layout}
        ${this.state.isMobile}
        ${this.props.customClass}
        ${this.props.fxDirection}
        ${this.props.fxType}
        ${this.state.fxState}`}>
        {this.props.titleTag ? this.props.titleTag : null}

        {fxPanel}

        <div className="mnv-ec-share-icons"
        style={(this.props.background) ? { background: this.props.background }
        : null }>

        <div className="mnv-ec-share-icons-container">
            {this.props.icons.map((icon, key) => {
              return (
              <a key={key} onClick={this.handleClick.bind(this, icon)}
              href={icon.href} title={icon.title} className={icon.className}
               target="_blank">
                <Icon icon={icon.icon} color={this.props.icon.color} size={icon.size} />
              </a>
              );
            })}
            </div>
        </div>
      </div>
      </div>
    );
  }
}
