//Large images of package items
import tshirt from '../../assets/large1.png';
import longsleeve from '../../assets/large2.png';
import hoodie from '../../assets/large3.png';
//Promo item large images
import bottle from '../../assets/bottle.jpg';
import cable from '../../assets/cable.jpg';
import notebook from '../../assets/notebook.jpg';
import pen from '../../assets/pen.jpg';
import sticker from '../../assets/sticker.jpg';
import wallet from '../../assets/wallet.jpg';
//Notebook
import notebookff0000 from '../../assets/notebookRed.jpg';
import notebook0000ff from '../../assets/notebookBlue.jpg';
//Pen
import pen0000ff from '../../assets/penBlue.jpg';
import pen008000 from '../../assets/penGreen.jpg';
import pen8e8379 from '../../assets/penGrey.jpg';
import penff0000 from '../../assets/penRed.jpg';
//Bottle
import bottle000000 from '../../assets/bottleBlack.jpg';
import bottle0000ff from '../../assets/bottleBlue.jpg';
import bottlec8a2c8 from '../../assets/bottleLilac.jpg';
import bottle32CD32 from '../../assets/bottleGreen.jpg';
import bottle222953 from '../../assets/bottleNavy.jpg';
import bottleff0000 from '../../assets/bottleRed.jpg';
//Cable
import cable000000 from '../../assets/cableBlack.jpg';
import cable0000ff from '../../assets/cableBlue.jpg';
import cable32CD32 from '../../assets/cableGreen.jpg';
import cableffa500 from '../../assets/cableOrange.jpg';
import cable6a0dad from '../../assets/cablePurple.jpg';
import cableff0000 from '../../assets/cableRed.jpg';
//Wallet
import wallet000000 from '../../assets/walletBlack.jpg';
import wallet0000ff from '../../assets/walletBlue.jpg';
import wallet808080 from '../../assets/walletGray.jpg';
import wallet32cd32 from '../../assets/walletGreen.jpg';
import walletffa500 from '../../assets/walletOrange.jpg';
import walletffc0cb from '../../assets/walletPink.jpg';
import wallet6a0dad from '../../assets/walletPurple.jpg';
import walletff0000 from '../../assets/walletRed.jpg';
import walletffff00 from '../../assets/walletYellow.jpg';


//Image displayed is based on current imageType state or color chosen
const largePath = {
  tshirt: tshirt,
  longsleeve: longsleeve,
  hoodie: hoodie,
  bottle: bottle,
  cable: cable,
  notebook: notebook,
  pen: pen,
  sticker: sticker,
  wallet: wallet
};

const notebookPath = {
  notebookundefined: notebook,
  notebook0000ff: notebook0000ff,
  notebook000000: notebook,
  notebookff0000: notebookff0000
};

const penPath = {
  penundefined: pen,
  pen000000: pen,
  pen0000ff: pen0000ff,
  pen008000: pen008000,
  pen8e8379: pen8e8379,
  penff0000: penff0000
};

const bottlePath = {
  bottleundefined: bottle,
  bottle000000: bottle000000,
  bottle0000ff: bottle0000ff,
  bottlec8a2c8: bottlec8a2c8,
  bottle32CD32: bottle32CD32,
  bottle222953: bottle222953,
  bottleff0000: bottleff0000,
  bottleffffff: bottle
};

const cablePath = {
  cableundefined: cable,
  cable000000: cable000000,
  cable0000ff: cable0000ff,
  cable32CD32: cable32CD32,
  cableffa500: cableffa500,
  cable6a0dad: cable6a0dad,
  cableff0000: cableff0000,
  cableffffff: cable
};

const walletPath = {
  walletundefined: wallet,
  walletffffff: wallet,
  wallet000000: wallet000000,
  wallet0000ff: wallet0000ff,
  wallet808080: wallet808080,
  wallet32cd32: wallet32cd32,
  walletffa500: walletffa500,
  walletffc0cb: walletffc0cb,
  wallet6a0dad: wallet6a0dad,
  walletff0000: walletff0000,
  walletffff00: walletffff00
};

export { largePath, notebookPath, penPath, bottlePath, cablePath, walletPath };
