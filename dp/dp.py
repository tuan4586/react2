from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Date, Integer, String
from sqlalchemy.orm import sessionmaker 



engine=create_engine("sqlite:///dp/dp.sqlite3",echo=True)
Base=declarative_base()

class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    avatar=Column(String)
    email=Column(String, unique=True)
    password=Column(String)
    
    
    def __init__(self, name):
    
        self.name = name
        
    def as_dict(self):
           return {c.name: getattr(self, c.name) for c in self.__table__.columns}
       
    

Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine) 
dp_session = Session() 

