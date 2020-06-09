FROM python:3.8
WORKDIR /dash
COPY requirements.txt /
RUN pip install -r /requirements.txt
COPY ./ ./
RUN cd dodfminer/ && python setup.py install && python setup.py develop
EXPOSE 8050
CMD ["python", "./main.py"]