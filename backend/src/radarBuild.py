from bs4 import BeautifulSoup
import requests
from datetime import date


def is_image(link):
    # could make more generic - now just handles pngs.
    return link.endswith('.png')


def links_in(base_url):
    # base_url: url
    # returns lists of subfolders
    soup = BeautifulSoup(requests.get(base_url).text)
    links = []
    for a in soup.find_all('a'):
        links.append(a['href'])


def path_tips_in(base_url):
    # base_url: url
    # returns lists of subfolders
    sublinks = links_in(base_url)
    folders = []
    for link in sublinks:
        if is_image(link):
            # this is a folder of images
            folders.append(base_url)
            break;
        elif link.endswith('/') and not link.startswith('/'):
            folders.extend(path_tips_in(base_url+link))

    return folders

DATA_SET_INDX = 5
RADAR_INDX = 6
YEAR_INDX = 7
MONTH_INDX = 8
DAY_INDX = 9
LOCAL_INDX = 10
def parse_url(url):
    temp = url.split('/')
    return {'dataset': temp[DATA_SET_INDX],
            'station': temp[LOCAL_INDX],
            'radar': temp[RADAR_INDX],
            'date': date(temp[YEAR_INDX], temp[MONTH_INDX], temp[DAY_INDX]),
            'url': url
            }


def find_files(url):
    # look for all image files in the given url tree
    # only look for images at the tips of the branches
    folders = path_tips_in(url)   # all the branch tips in this tree
    folder_info = [] # going to be full of data_set, station, date, time, radar type, pic_files
    for folder in folders:
        folder_info.append(parse_url(folder))
    
    stations = []
    for info in folder_info:
        stations.append(info['station'])
    stations = list(set(stations))
    image_dict = {}
    # stations
    for station in stations:
        image_dict['station'] = {'dates':[]}

    # dates
    for info in folder_info:
        image_dict[info['station']]['dates'].append(info['date'])
        link_list = links_in(info['url'])
        image_dict
    
    # times
    # file format: KDTX19960505_095629.png  station.year.month.day_hr.min.sec
    for info in folder_info:
        for link in link_list:
            if is_image(link):
                timestr = link.split('_')[1][]
                image_dict[info['station'], info['dates']]
                get time, 
                append two pic urls

    # images



    


