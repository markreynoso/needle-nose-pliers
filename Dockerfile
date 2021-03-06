FROM apify/actor-node-basic

# Copy all files and directories from the directory to the Docker image
COPY . ./

# Install NPM packages, skip optional and development dependencies to keep the image small,
# avoid logging too much, and log the dependency tree
RUN npm install --quiet --only=prod --no-optional \
 && npm list