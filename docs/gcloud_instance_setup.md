

sudo apt-get install git

To install node:
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 6.10.3

npm -g install forever
npm -g install gulp
npm install -g webpack@3.10.0

# this forwards HTTP calls to node server running on 3000, as Linux disallows
# running of procs on ports below 1024..
sudo iptables -t nat -I PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 3000
