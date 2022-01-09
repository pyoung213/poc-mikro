# Mikro POC

## About this Repository

Just a POC and conversation starter showing how graphql or rest endpoints could be setup with Mikro. Everything is running just express but can be converted to lambdas without much trouble.

## Prerequisites

-   [Brew](https://brew.sh/): MacOS CLI package manager
-   [nvm](https://github.com/nvm-sh/nvm): `brew install nvm` highly recommended to configure with [zsh](https://ohmyz.sh/)
-   [Node](https://nodejs.org/en/): will be auto installed with zsh config otherwise use nvm manually (check version in .nvmrc)
-   [Docker](https://docker.com) `brew install --cask docker`

### NVM config with zsh (paste in your ~/.zshrc)

```

#  export NVM_DIR="$HOME/.nvm"
#  [ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

# place this after nvm initialization!
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

if [ "$nvmrc_node_version" = "N/A" ]; then
  nvm install
elif [ "$nvmrc_node_version" != "$node_version" ]; then
  nvm use
fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

## Build Instructions

1. Clone repository (first time) with `git clone` or pull updates to the repository (subsequent times) with `git pull`
2. I'm not 100% sure if this will work but get Mongo running `docker-compose up -d`
3. Install dependencies: `npm install`
4. Run GraphQL or Rest endpoints: `npm run start:graphql` or `npm run start:rest`
5. Profit?
