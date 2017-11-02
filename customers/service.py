# -*- coding:utf-8 -*-
from .models import PhoneCode
from django.utils import timezone
def verify_code(phone, code):
    print "phone: "
    try:
        phoneCode = PhoneCode.objects.get(phone=phone,code=code)
        dif = timezone.now()-phoneCode.add_date
        if phoneCode:
            print "认证成功"
            return True
        else:
            return False
        # if dif.seconds < 300:
        #     return True
        # else:
        #     return False
    except PhoneCode.DoesNotExist:
        return False
import random
def generate_verification_code():
    ''' 随机生成6位的验证码 '''
    code_list = []
    for i in range(10): # 0-9数字
        code_list.append(str(i))
    for i in range(65, 91): # A-Z
        code_list.append(chr(i))
    for i in range(97, 123): # a-z
        code_list.append(chr(i))

    myslice = random.sample(code_list, 6)  # 从list中随机获取6个元素，作为一个片断返回
    verification_code = ''.join(myslice) # list to string
    # print code_list
    # print type(myslice)
    return verification_code