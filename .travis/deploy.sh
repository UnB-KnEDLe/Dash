#!/bin/bash
set -e
scp -P ${PORT} -pr ${TRAVIS_BUILD_DIR}/build ${USER}@${SERVER}:~/${TRAVIS_BUILD_DIR}/www