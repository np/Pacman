dockerrun(){
  sudo docker run -v $PWD:/app -w /app "$@"
}

unalias npm &>/dev/null || :
unset npm &>/dev/null || :
npm(){
  dockerrun node npm "$@"
}

build(){
  npm install
  npm run build
}
