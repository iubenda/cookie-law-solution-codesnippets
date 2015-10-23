<div class="rte{if $content_only} content_only{/if}">
                  {$cms->content}
</div>
{if $HOOK_CMS_PRE_FOOTER}
              {if $cms->id == 3}
                        <div class="hook_cms_pre_footer">
                                            {$HOOK_CMS_PRE_FOOTER}
                          </div>
                  {/if}
{/if}
