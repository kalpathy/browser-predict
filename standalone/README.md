
## install dependencies

"""npm install"""

should do the trick

need python 2

I had conda3, so python was mapped to python3. To fix,
"""
conda create --name py2 python=2.7
source activate py2
"""

then npm install of tfjs-node worked
