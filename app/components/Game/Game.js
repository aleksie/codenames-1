import React from 'react';
import {connect} from 'react-redux';
import Messages from '../Messages';
import NotFound from '../NotFound';
import GameStatus from './GameStatus';
import Hint from './Hint';

class Game extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (!this.props.user.socketId && nextProps.user.socketId) {
      console.log('trying to join room ', this.props.gamePosition);
      this.context.channel.emit('join', {
        roomId: this.props.params.roomId,
        player: nextProps.user,
        position: this.props.gamePosition
      })
    }
  }

  render() {
    if(!this.props.currentGameRoom || !this.props.currentGameRoom.game)
      return <NotFound />


    return (
      <div>
        <GameStatus user={this.props.user} room={this.props.currentGameRoom} />
        <div className="board">
          {this.renderCards(this.props.currentGameRoom.game.cards)}
        </div>
        <Hint />
      </div>
    );
  }

  renderCards(cards) {
    return cards.map((card, i) => {
      const style = card.type ? `card card-${card.type}` : `card`
      return <div key={i} className={style}>{card.text}</div>
    })
  }

}

Game.contextTypes = {
  channel: React.PropTypes.object
}

const mapStateToProps = (state, ownProps) => ({
  user: state.auth.user,
  currentGameRoom: state.gameRooms.filter(room => room.id === ownProps.params.roomId )[0],
  gamePosition: state.gamePositions[ownProps.params.roomId]
})

export default connect(mapStateToProps)(Game);
