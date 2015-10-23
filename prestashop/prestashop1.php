?php

class CmsController extends CmsControllerCore
{
    public function initContent()
    {
        parent::initContent();

        $this->context->smarty->assign(
            'HOOK_CMS_PRE_FOOTER', Hook::exec('displayCmsPreFooter')
        );
    }
}
